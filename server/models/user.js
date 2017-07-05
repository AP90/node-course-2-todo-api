var mongoose = require("mongoose");

// mongo will create a db called users
var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});


module.exports = {User};