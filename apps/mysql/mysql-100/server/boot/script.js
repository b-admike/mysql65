'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Customer = app.models.Customer;
    var Order = app.models.Order;

   var sampleCustomers = [
       {
           name: 'customer1',
           age: 21,
           id: 1
       },
       {
           name: 'customer2',
           age: 42,
           id: 2
       }
   ]

   var sampleOrder = {
       customerId: 1,
       description: 'order for customer1',
       date: new Date()
   }



    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');
        Customer.create(sampleCustomers, function(err, customers) {
            if (err) throw err;
            Order.create(sampleOrder, function(err, order) {
                if (err) throw err;
                Customer.findById(1, function(err, cust1) {
                  if (err) throw err;
                  cust1.orders({}, function(err, cust1orders) {
                      if (err) throw err;
                      console.log('Orders for customer1 ', cust1orders);
                  })
                });
                Customer.findById(2, function(err, cust2) {
                  if (err) throw err;
                  cust2.orders({}, function(err, cust2orders) {
                      if (err) throw err;
                      console.log('Orders for customer2 ', cust2orders);
                  })                  
                })
            })
        })
    });
};
