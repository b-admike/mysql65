'use strict';
var debug = require('debug')('testapp');
module.exports = function(app) {
  var mysqlDs = app.dataSources.localmssql;
  var N = 20000;
  var stringLength = 85000;
  var bigName = new Array(stringLength).join('a');

  mysqlDs.automigrate('testmodel', function(err) {
    if (err) console.log('>>>ERR ', err);
    var myModel = app.models.testmodel;
    var Instances = Array.apply(null, {length: N}).map(function(n, i) {
      var val = {};
      if (isPrime(i)) {
        val = {name: bigName, age: i};
      } else {
        val = {name: 'instance' + i, age: i};
      }
      return val;
    });
    myModel.create(Instances, function(err, res) {
      if (err) console.log('failed to create instances>>> ', err);
      if (res.length) console.log('created %d instances ', res.length);
      debug('res ***', res);
    });
  });

  function isPrime(n) {
    var max = Math.sqrt(n);
    for (var i = 2;  i <= max;  i++) {
      if (n % i === 0)
        return false;
    }
    return true;
  };
};
