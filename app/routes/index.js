module.exports = function(app){
 var express = require('express');
 var router = express.Router();

 /* GET home page. */
 router.get('/', function(req, res) {
   res.render('index', { title: 'Express' });
 });

 /* GET partials for marionette templates. */
 router.get('/templates/:template', function(req, res) {
   res.render(__dirname + "/../views/templates/"+req.params.template+".jade")
 });

 app.use("/",router) 
}
