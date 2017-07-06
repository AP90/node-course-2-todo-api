const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// todo.remove({}) - removes all matching queries
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// // finds, deletes and returns first matching doc
// Todo.findOneAndRemove({_id: "595eabdc67f81a0011a27324"}).then((todo) => {
// });

//finds and returns doc
Todo.findByIdAndRemove("595eabdc67f81a0011a27324").then((todo) => {
    console.log(todo);
});


