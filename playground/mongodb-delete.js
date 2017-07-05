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

    //deleteMany returns result obj
    //Commandresult.result.n = number of deleted docs
//    db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
//        console.log(result);
//    });

   //deleteOne
//    db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
//         console.log(result);
//    });

   //findOneAndDelete
   //returns object with value object in it
//    db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    });

    //delete all docs with same name
    // db.collection("Users").deleteMany({name: "Bob"}).then((result) => {
    //     console.log(`Number of deleted docs: ${result.result.n}`);
    // });

    //delete by _id
    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("595c239ab8322f507b235f77")
    }).then((result) => {
        console.log(result);
    });








    // db.close();
});