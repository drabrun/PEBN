var crypto = require('crypto'),
    passport = require('passport'),
    uuid = require('node-uuid');

module.exports = function(app) {

        var express = require('express');
        var router = express.Router();
        var data = require('../models/users')(app);

        /* GET users listing. */
        router.get('/', function(req, res) {
            res.send('respond with a resource');
        });
        
        router.post("/register", function(req, res) {
                var vpw = req.body.vpw;
                var pwu = req.body.pwu;
                var un = req.body.un;

                if (vpw != pwu) {
                    res.statusCode = 400;
                    res.send({
                        error: {
                            message: "The two passwords did not match"
                        }
                    });
                    return;
                }

                req.checkBody('un', 'Please enter a valid email.').notEmpty().isEmail();
                var errors = req.validationErrors();
                if (errors) {
                    res.statusCode = 400;
                    res.send({
                        error: {
                            message: errors[0].msg
                        }
                    });
                    return;
                }

                var new_salt = Math.round((new Date().valueOf() * Math.random())) + '';
                var pw = crypto.createHmac('sha1', new_salt).update(pwu).digest('hex');
                var created = new Date().toISOString().slice(0, 19).replace('T', ' ');

                new data.ApiUser({
                    email : un,
                    password: pw,
                    salt: new_salt,
                    created: created,
                    user_id: uuid.v4()
                }).save(null, {method: 'insert'}).then(function(model) {
                    passport.authenticate('local')(req, res, function() {
                        res.send({
                            success: true
                        });
                    })
                }, function(err) {
                    res.statusCode = 400;
                  
                    console.log(err)
                    res.send({
                        error: {
                            message: "user could not be created"
                        }
                    });
                });
            });



            router.post("/login", function(req, res, next) {
                console.log('da da dave')
                passport.authenticate('local', function(err, user, info) {
                    
                    if (err || !user) {
                    	console.log('error check failed')
                        res.statusCode = 400;
                        return res.send({
                            error: info
                        });
                    }
                    req.logIn(user, function(err) {
                    	console.log('inside login')
                        if (err) {
                            res.statusCode = 400;
                            return res.send({
                                error: info
                            });
                        }
                        return res.send({succes : true});
                    });
                })(req, res, next);
            });



            app.use("/users", router)
        }
