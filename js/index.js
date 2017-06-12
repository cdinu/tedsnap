var App = require('lfa-core').App;

App.book.on('render', function (/* opts */) {
  var classroom = require('lfa-classroom');
  var ClassmateList = classroom.ClassmateList;
  var NameInput = classroom.NameInput;

  var studentList = document.getElementById('student-list');
  if (studentList) {
    React.render(
      React.createElement(ClassmateList, null),
      studentList
    );
  }

  var nameInput = document.getElementById('cover-name-input');
  if (nameInput) {
    React.render(
      React.createElement(NameInput, null),
      nameInput
    );
  }
});
