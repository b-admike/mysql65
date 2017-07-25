'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var tableName = 'charTable';

    db.discoverSchema(tableName, { visited: {}, associations: true },
        function(err, schema) {
            if (err) throw err;
            console.log('schema >>', schema);
  });

};
