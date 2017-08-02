"use strict";
var util = require("util");
var _ = require("lodash");

module.exports = function(app) {
  var db = app.datasources.mysqlDs;
  var phonebook = app.models.phonebook;
  var counter = 0

  db.automigrate(function(err) {
    if (err) throw err;
    console.log("\nAutomigrate completed");
    phonebook.observe("before save", function(ctx, next) {
      //fetch autogen field from db
      _.each(ctx.instance.toObject().contacts, function(contact) {
          counter ++;
          _.extend(contact, {"counter": counter });
      });
      next();
    });
  });
};
