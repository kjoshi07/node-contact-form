/**
 * Created by Kjoshi on 9/10/2015.
 */
//==================LOAD ALL REQUIRED MODULE====================================
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/**
 * export sendEmailNotification method to order to send email
 *
 * @param {Object} contactRequest object with all parameters received from user in REST API.
 * @returns a error message or a successful sent mail message on console.
 */

exports.sendEmailNotifications = function (contactRequest) {
    // create reusable transporter object using SMTP transport

//Replace with your email credentials
    var transporter = nodemailer.createTransport(smtpTransport({
        host: 'mail.example.com', //replace with your email server credentials
        port: 25,
        auth: {
            user: 'john@example.com', //change your email settings
            pass: '123456'
        },
        tls: {rejectUnauthorized: false},
        debug: true
    }));

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'John Due<john@example.com>', // sender address replaced with yours
        to: 'admin@example.com', // list of receivers
        subject: 'Received a contact Request from ' + contactRequest.firstName + " " + contactRequest.lastName, // Subject line
        text: contactRequest.message // plaintext body

    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });

}


