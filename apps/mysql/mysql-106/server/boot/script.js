"use strict";
var util = require("util");
var _ = require("lodash");

module.exports = function(app) {
  var db = app.datasources.mysqlDs;
  var Person = app.models.Person;

  var people = [
    {
      name: "John",
      age: 22,
      id: 1
    },
    {
      name: "Jane",
      age: 23,
      id: 2
    }
  ];

  db.automigrate(function(err) {
    if (err) throw err;
    console.log("\nAutomigrate completed");
    Person.create(people, function(err, people) {
      if (err) throw err;
    Person.find(function(err, people) {
        if (err) throw err;
        _.forEach(people, function(person) {
          if (person.name === 'John') {
              person.name = 'Johnny';
          } 
          person.save(function(err, savedPerson) {
              if (err) throw err;
          });
        });
        

    })
    });

    Person.observe("before save", function(ctx, next) {
      console.log("[before save] ctx.isNewInstance", ctx.isNewInstance);
      next();
    });

    Person.observe("after save", function(ctx, next) {
      console.log("[after save] ctx.isNewInstance", ctx.isNewInstance);
      next();
    });
  });
};
