const orm = require("../config/orm.js");

let burgerOrms = {
    selectAll: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(result) {
            cb(result);
        });
    },
    updateOne: function(burger_id, cb) {
        orm.updateOne(burger_id, function(result) {
            cb(result);
        });
    }
}

// console.log(burgerOrms);
module.exports = burgerOrms;