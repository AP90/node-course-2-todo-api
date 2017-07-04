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

    //can create collection on the fly
    //insert one allows u to enter new data into doc
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     //ops stores all docs inserted
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.collection("Users").insertOne({
        name: "Bob",
        age: 30,
        location: "Baltimore"
    }, (err, result) => {
        if (err) {
            return console.log(err);
        };
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.close();
});