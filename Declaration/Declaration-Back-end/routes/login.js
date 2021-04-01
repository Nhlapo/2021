const express = require('express');
Router = express.Router();
myConnection = require('../connection');
const secretOrKey = 'secretKey';
var session = require('express-session');
const jwt = require('jsonwebtoken');

Router.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


Router.post('/logins', function (req, res) {

    var adminUsername = req.body.adminUsername;
    var adminPassword = req.body.adminPassword;

    //User checking
    if (!adminUsername || !adminPassword) {
        return res.send({ message: 'Please Enter All The Fields' });
    }
    else {
        
        if (adminUsername && adminPassword) {

            myConnection.query("SELECT * FROM admin WHERE adminUsername = ? AND adminPassword = ? ", [adminUsername, adminPassword], function (error, results, fields) {

                if (results.length > 0) {

                    var userLogin = {
                        id: results[0].adminID,
                        name: results[0].adminUsername,
                        lastName: results[0].adminName
                    };

                    var token = jwt.sign(userLogin, secretOrKey, { expiresIn: 60 * 5 });

                    res.json({
                        message: "LoggedIn Successfully",
                        token: token,
                        data: [results[0].adminUsername,results[0].adminName],
                        status: 200
                    });
                }


                else {
                    res.json({
                        status: 401,
                        message: "Incorrect Username/Password"
                    })
                }
            });
        }

    }
});


Router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success tag', 'you logged out');
    res.redirect('/login');
});

module.exports = Router;