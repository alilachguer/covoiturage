const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');
const assert = require('assert');

const mongoClient = require('mongodb').MongoClient;
const mongo_url = "mongodb://localhost:27017";


app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const path_index = "./dist/index.html"

const server = app.listen(8888, function () {
    const port = server.address().port;
    console.log("server is running at port", port, "...");
});


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});


function userResearch(db, param, callback){
    db.collection("users").find(param["filterObject"])
    .toArray(function (err, docs) {
        if(err)
            callback(err, []);
        else if(docs !== undefined)
            callback(param["message"], docs);
        else
            callback(param["message"], []);
    });
}

function trajetResearch(db, param, callback){
    db.collection("trajets").find(param["filterObject"])
    .toArray(function (err, docs) {
        if(err)
            callback(err, []);
        else if(docs !== undefined)
            callback(param["message"], docs);
        else
            callback(param["message"], []);
    });
}


mongoClient.connect(mongo_url, function (err, database) {
    assert.equal(null, err);
    var db = database.db('covoiturage');

    let trajets = [];
    let json;

    app.get("/admin", function (req, res) {
        assert.equal(null, err);
        db.collection("trajets").find().toArray(function (err, docs) {
            if(docs !== undefined){
                console.log(docs);
                json = docs;
            }
            res.setHeader("Content-type", "application/json; charset=UTF-8")
            res.json(json);
        });
        database.close();
    });

    //get users
    app.get("/admin/users", function (req, res) {
        assert.equal(null, err);
        let users;
        db.collection("users").find().toArray(function (err, docs) {
            if(docs !== undefined){
                console.log(docs);
                users = docs;
                
            }
            res.setHeader("Content-type", "application/json; charset=UTF-8")
            res.json(users);
        });
        database.close();
    });


    app.post("/admin/add", function (req, res) {
        assert.equal(null, err);
        console.log(req.body);
        let trajet = req.body;
        db.collection("trajets").insertOne(trajet);
        //let json = {message: "le trajet a été ajouté", data: trajet};
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.json(trajet);
        
    });
    
    //retourne tout les utlisateurs avec mail unique
    app.get("/users", function (req, res) {
        userResearch(db, {"message": "/users", "filterObject": {}},function (etape, results) {
            console.log(etape, ":", results.length, "user");
            var user = [];
            for(let doc of results){
                if(!user.includes(doc.mail)){ 
                    user.push(doc.mail); 
                }
            }
            user.sort();
            var json = JSON.stringify(user);
            res.setHeader("Content-type", "application/json; charset=UTF-8");
            console.log(json);
            res.end(json);
        });
    });


    app.get("/trajets/:depart/:arrivee/:date/:prix", function (req, res) {
        assert.equal(null, err);
        let filterObject = {};
        //filterObject.prix = {};
        if (req.params.depart != "*") { filterObject.ville_depart = req.params.depart; }
        if (req.params.arrivee != "*") { filterObject.ville_arrivee = req.params.arrivee; }
        if (req.params.date != "*") { filterObject.date = req.params.date; }
        if (req.params.prix != "*") { 
            filterObject.prix = req.params.prix ; 
            filterObject.prix.$lte = req.params.prix;
        }

        console.log("req params prix : " + req.params.prix);
        console.log("req params prix : " + JSON.stringify (req.params.date) );

        let filter = JSON.stringify(filterObject);

        console.log("filer: " + filter );

        db.collection("trajetsConducteur").find(filter).toArray(function (err, docs) {
            let json = JSON.stringify(docs);
            res.setHeader("Content-type", "application/json; charset=UTF-8");
            res.end(json);
        });

    });

});


