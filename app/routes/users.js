module.exports = function(app){

 var express = require('express');
 var router = express.Router();

 /* GET users listing. */
 router.get('/', function(req, res) {
   console.log(app)
   res.send('respond with a resource');
 });
 
 app.use("/users",router)
}
