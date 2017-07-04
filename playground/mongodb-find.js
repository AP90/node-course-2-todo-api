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

    //returns cursor - a pointer to docs
    //toArray converts to an array then returns a promise
    //use .then() to pass callback when data is returned
    // db.collection("Todos").find({
    //     //_id is not a string it is an object reference have to create one
    //     //using new ObjectID
    //     _id: new ObjectID("595bcbced989f01ce8479298")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log("Todos count: ", count);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Users").find({name: "Bob"}).count().then((count) => {
    //     console.log(`User count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch useres", err);
    // });

    db.collection("Users").find({name: "Bob"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    // db.close();
});