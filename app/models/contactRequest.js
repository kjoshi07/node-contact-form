/**
 * Created by Kjoshi on 9/8/2015.
 */
//==============LOAD ALL REQUIRED MODULES========================================
//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
var mongoose = require('mongoose');
var ContactRequestSchema = new mongoose.Schema({
    firstName: String,  //String type
    lastName: String,  //String type
    email: {type: String, required: true},  //String type and required
    phoneNumber: {type: Number, required: true}, //Number type and required
    message: {type: String, required: true} //String type and required
});

var ContactRequest = mongoose.model('ContactRequest', ContactRequestSchema);
// make this available to our users in our Node applications
module.exports = ContactRequest;
