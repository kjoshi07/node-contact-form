/** /app/route.js
 *route.js has deified all end points and forward request fr corresponding controller.
 * @type {*|exports|module.exports as route}
 */
var express = require('express');  //load express module to crate instance of app
//The express.Router class can be used to create modular mountable route handlers.
// A Router instance is a complete middleware and routing system;
var router = express.Router();
//express-validation is a middleware that validates the body, params, query,
// headers and cookies of a request and returns a response with errors;
//we have used it for contact request parameters validation with JOI.
var validate = require('express-validation');
//Index controller to handle all(get, post, delete, put) route "/" requests.
var IndexController = require('./controllers/IndexController');
//ContactRequest controller to handle all(get, post, delete, put) route "/contactRequest" requests.
var ContactRequestController = require('./controllers/ContactRequestController');
//load validation module to validate input requests parameter.
var validation = require('./utils/validation');

//get Route API to just check route end point is working fine.
router.route('/')
    .get(IndexController.getWelcomeMessage);

//all request received at /conatctRequest end point would be received here and would be
// transfer to corresponding controller as per operation method.
router.route('/contactRequest/')
    .get(ContactRequestController.getAllContactRequests)
    .post(validate(validation.contactRequest), ContactRequestController.addContactRequest);
//export router module.
module.exports = router;
