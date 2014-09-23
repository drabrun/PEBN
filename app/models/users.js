module.exports = function(app) {
    var Bookshelf = app.get('bookshelf')
    
    var bookshelf = {}
    
    bookshelf.ApiUser = Bookshelf.Model.extend({
        tableName: 'users',
        idAttribute: "user_id"
    });

    return bookshelf;
}
