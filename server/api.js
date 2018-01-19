const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongo_url = "mongodb://localhost:27017";


router.get('/show', function (req, res) {
    mongoClient.connect(mongo_url, function (req, client) {
        
        var db = client.db('covoiturage');
        //console.log(collection);
        db.collection("users").find().toArray().then(doc => {
            const output = {result: "ok", message: doc};
            res.json(output);
        });
        client.close();
    });
});

router.post('/add', function (req, res) {
    //res.end("hi, add api", req.body.name);
    mongoClient.connect(mongo_url, function (err, db) {
        const data = {name: req.body.name};
        db.collection('users')
        .insertOne(data, (err, result)=>{
            if(err) throw err;
            const response = {result: 'ok', message: result.result.n + " inserted"};
            res.json(response);
        });
        db.close();
    });

});

router.delete('/delete/:name', function (req, res) {
    res.end("delete api:", req.param.name);
})


module.exports = router;


