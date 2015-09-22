/**
 * Created by Kjoshi on 9/8/2015.
 * Index controller for end point "/"
 * @param request and response object, request object would have all http input request parameters.
 * @returns response(object) a welcome message as response to API caller.
 */
exports.getWelcomeMessage = function(req, res) {

   return res.json({status: 200, success: true, message:"Welcome to Node API"});

};
