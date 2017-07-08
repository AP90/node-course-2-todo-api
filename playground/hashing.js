const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");

var data = {
    id: 10
};

var token = jwt.sign(data, "123abc");
console.log(token);
var decoded = jwt.verify(token, "123abc");
console.log(decoded);

// var message = "I am user friendly 3";
// //returns object so use .toString()
// //returns 342342352345230400gdjdf9g0s403g90340
// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     // +somesecret salts the hash
//     hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// }

// // //person in the middle - doesn't have access to the salt
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();



// var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();

// if (resultHash === token.hash) {
//     console.log("Data was not changed");
// } else {
//     console.log("Data was changed. Don't trust");
// }