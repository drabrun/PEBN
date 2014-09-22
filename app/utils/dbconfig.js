module.exports = function(){
 var knex = require('knex')({
  client: 'postgres',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'passpass',
    database : 'PEBN_test',
    charset  : 'utf8'
  }
 });

var bookshelf = require('bookshelf')(knex)

return bookshelf;

}
