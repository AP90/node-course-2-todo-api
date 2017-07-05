// const MongoClient = require("mongodb").MongoClient;
//same as above - takes the property on the mongodb object
//called mongoClient and assigns it to a new var called MongoClient
const {MongoClient, ObjectID} = require("mongodb");

//url could be aws or heroku, this time localhost
//this creates the TodoApp file
//mongo doesn't create database unless data is in it
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //findOneAndUpdate
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("595c29d7b8322f507b2360da")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        name: "Jen"
    }, {
        $set: {name: "Andrea"},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});