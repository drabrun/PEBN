module.exports = function(app){
  //Require all routes here

 var index = require('./../routes/index')(app);
 var users = require('./../routes/users')(app);


}
