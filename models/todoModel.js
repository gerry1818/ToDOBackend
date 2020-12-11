var db = require('../config/db_config');

var todo = {
    getItem: function (callback) {
        //Query to read todo items
        return db.query(`select * from "todo"`, callback);
    },
    createItem: function (body, callback) {
        //Query to create a new todo items
        return db.query(`insert into "todo" values('${body.id}', '${body.title}', '${body.priority}', '${body.date}', '${body.state}')`, callback);
    },
    updateItem: function (id, callback) {
        //Query to Update todo items state
        return db.query(`update "todo" set state='1' where id='${id}'`, callback);
    },
    deleteItem: function (id, callback) {
        //Query to delete todo item
        return db.query(`delete from "todo" where id=${id}`, callback);
    },
    searchItem: function (req, callback) {
        //Query to search todo item
        var key = Object.keys(req)[0];
        var value = Object.values(req)[0]
        return db.query(`select * from "todo" where ${key}='${value}'`, callback);
    },

};

module.exports = todo;
