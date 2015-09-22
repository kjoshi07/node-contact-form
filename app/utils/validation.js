/**
 * Created by Kjoshi on 9/9/2015.
 */
//================LOAD ALL REQUIRED MODULE=====================================
//Object schema description language and validator for JavaScript objects.
var Joi = require('joi');
//contact request validation module for all parameters exist in req.body
module.exports.contactRequest = {
    options: {flatten: true},
    body: {

        firstName: Joi.string(), //First Name should be a string otherwise send a error message
        lastName: Joi.string(),   //Last Name should be a string otherwise send a error message
        email: Joi.string().email().required(), //Email should be as email format and required to be present in request body
        phoneNumber: Joi.number().required(), //Phone number should be number formatted and must be present in request body
        message: Joi.string().required()  //message should be a string formatted and must be present in request body.

    }
};
