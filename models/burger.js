var orm = require("../config/orm.js");

var model = {

  selectAll : function(callback)  {
    orm.selectAll("burgers", function(data) {
      callback(data);
    });
  },

  insertOne : function(columnName, burgerName, callback)  {
    orm.insertOne("burgers", columnName, burgerName, function(data) {
      callback(data);
    });
  },

  updateOne : function(columnName, burgerID, callback)  {
    orm.updateOne("burgers", columnName, burgerID, function(data) {
      callback(data);
    });
  }
};

module.exports = model;