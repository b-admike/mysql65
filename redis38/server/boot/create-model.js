'use strict';
var f = require('util').format;
module.exports = function(app) {
  var myDs = app.datasources.redisds;
  var myNotes = [
          {title: 'note1', id: 1},
          {title: 'note2', id: 2},
          {title: 'note3', id: 3}];
  function createMymodel() {
    myDs.automigrate('Note', function(err) {
      if (err)
        console.error('failed to migrate Note ', err);
      else
        console.log('model created');
      createNotes();
    });
  };
  function createNotes() {
    var myModel = app.models.Note;
    myNotes.forEach(function(note) {
      myModel.create(note, function(err) {
        if (err)
          console.log('Insert failed ', err);
        else
          console.log('Insert successful');
        if (note.id === 3)
          deleteNotes();
      });
    });
  };

  function deleteNotes() {
    var myModel = app.models.Note;
    myNotes.forEach(function(note) {
      myModel.deleteById(note.id, function(err) {
        if (err)
          console.log(f('Delete failed for id %d: %s', note.id, err));
        else
          console.log('Delete successful for id ', note.id);
        if (note.id === 3)
          deleteNonExistantId();
      });
    });
  };

  function deleteNonExistantId() {
    var myModel = app.models.Note;
    myModel.deleteById(4, function(err) {
      if (err)
        console.log(f('Delete failed for id %d: %s', note.id, err));
      else
        console.log('This code should not be reached');
    });
  };

  createMymodel();
};
