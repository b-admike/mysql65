'use strict';
module.exports = function(app) {
  var myDs = app.datasources.mysqlds;
  function createMymodel() {
    myDs.automigrate('myModel', function(err) {
      if (err)
        console.error('failed to migrate myModel ', err);
      else
        console.log('model created');
      upsertModel();
    });
  };
  function upsertModel() {
    var myModel = app.models.myModel;
    var testModel = {};
    testModel.myField = [{'atr1': 'value1', 'atr2': 'value2'}];
    myModel.upsert(testModel, function(err) {
      if (err)
        console.log('Upsert failed ', err);
      else
        console.log('Upsert successful');
    });
  };

  createMymodel();
};
