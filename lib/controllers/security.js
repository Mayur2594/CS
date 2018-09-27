var jwt    = require('jsonwebtoken');
var express = require('express');

var app = express();

app.set('superSecret', process.env.JWT_SECRATE); // secret variable

module.exports = function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {     
            if (err) {
                 req.decoded = { success: false, message: 'Failed to authenticate token.' }; 
            } else {
                // if everything is good, save to request for use in other routes
				decoded.success= true
                req.decoded = decoded;  
            }
        });

    } else {

        // if there is no token
        // return an error
         req.decoded ={ 
            success: false, 
            message: 'No token provided.'
        };
    }

};