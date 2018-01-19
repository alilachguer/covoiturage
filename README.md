# covoiturage
projet **Covoiturage** pour l'UE "présentation données web" partie MEAN Stack.

travail réalisé par Ali Lachguer et Mahmoud Tanane.

### Les collections MongoDB
- trajets
- trajetsConducteur
- users

### squelette des collections
##### collection trajets

    {
        "ville_depart" : "Montpellier",
        "ville_arrivee" : "Paris",
        "distance" : 700,
        "temps_moyen" : "10",
        "prix" : 30
    }
##### collection trajetsConducteur

    {
        "ville_depart" : "Montpellier",
        "ville_arrivee" : "Paris",
        "user" : "user",
        "prix" : 12,
        "date" : "2018-01-19",
        "vehicule" : "toyota"
    }

##### collection users

    {
        "mail" : "usermail@mail.com",
        "password" : "password",
        "nom" : "nom3",
        "prenom" : "prenom3",
        "age" : 30,
        "adresse" : "23, adresse postale",
        "telephone" : "012345678"
    }


### Modules
- AppModule

### Les components du projet
 - admin
 - admin-trajet
 - app
 - auth
 - fermer-compte
 - header
 - inscription
 - trajet
### Services
- trajet-service
- user