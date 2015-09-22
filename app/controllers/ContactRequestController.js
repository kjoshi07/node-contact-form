/**
 * Created by Kjoshi on 9/8/2015.
 */
    //==============Load all required custom modules==========================
var ContactRequest = require('../models/contactRequest');
var sendEmail = require('../utils/sendEmail');

exports.addContactRequest = function (req, res) {
//Get all parameters from request nd mapped with model OR you can create contact request constructor..
    var contactRequest = new ContactRequest();
    contactRequest.firstName = req.body.firstName;
    contactRequest.lastName = req.body.lastName;
    contactRequest.email = req.body.email;
    contactRequest.phoneNumber = req.body.phoneNumber;
    contactRequest.message = req.body.message;
    contactRequest.save(function (err) {
        if (err) {
            return res.json({message: err});
        }

        res.json({success: true, message: "Contact Request has been received, we will get back to you shortly"});
        //send email notification after save contact information in database.
        sendEmail.sendEmailNotifications(contactRequest);

    });

};

//Get all the contact request saved in database.

exports.getAllContactRequests = function (req, res) {
    ContactRequest.find({}, function (err, contactRequests) {

        if (err) {
           return res.json({success: false, status: err.status, errorMessage: err});
        }
        console.log(contactRequests);

        return res.json({success: true, status: 200, data: contactRequests});

    });
};
