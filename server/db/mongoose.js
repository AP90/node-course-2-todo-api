const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://<test>:<test>@ds151222.mlab.com:51222/node-todo-api-db");


module.exports = {mongoose};