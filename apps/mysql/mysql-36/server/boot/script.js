'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;


    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');
    });
};
