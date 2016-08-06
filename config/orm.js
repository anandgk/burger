var dbconnection = require('./connection.js')().getMySQLConnection();

var orm = {
  
    selectAll : function(tableName, callback)  {
      dbconnection.query("select * from " + tableName, function(err, data)  {
        if (err) throw err;
        callback(data);
      });
    },

    insertOne : function(tableName, columnName, burgerName, callback) {
      dbconnection.query("insert into " + tableName + " (" + columnName + ") values (?)", [burgerName], function(err, data) {
        if (err) throw err;
        callback(data);
      });
    },

    updateOne : function(tableName, columnName, burgerID, callback) {
      dbconnection.query("update" + tableName + "set " + columnName + " = 1 where id = " + burgerID, function(err, data)  {
        if (err) throw err;
        callback(data);
      });
    }
  
};

module.exports = orm;