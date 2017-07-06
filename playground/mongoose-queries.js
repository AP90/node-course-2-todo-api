const {ObjectID} = require("mongodb");



const {mongoose} = require("./../server/db/mongoose");
//a model that returns a constructor function
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "595e445d8c58ab341040a54311";

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// //Mongoose methods
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// //returns first one that matches
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// //searches by id
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log("Todo by Id", todo);
// }).catch((e) => console.log(e));

User.findById("595d4f375d46a9780529be9f").then((user) => {
    if (!user) {
        return console.log("User not found");
    }
    console.log("User", user);
}).catch((e) => console.log(e));