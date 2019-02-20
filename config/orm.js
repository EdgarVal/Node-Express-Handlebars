const connection = require("../config/connection.js");

let orm = {
    selectAll: function(cb) {
        // let queryString = "SELECT * FROM burgers";
        connection.query("SELECT * FROM burgers", function(err, result) {
            if(err) throw err;
            cb(result);
            // result.render("index", {burgers: result});
        });
    },
    insertOne: function(burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false
        }, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableId, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: tableId}], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;