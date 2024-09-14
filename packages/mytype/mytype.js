// global AutoForm
// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See mytype-tests.js for an example of importing.

// import './mytype.html';
import { AutoForm } from 'meteor/aldeed:autoform';


AutoForm.addInputType('mytype', {
    template: 'mytypetemplate',
    valueOut: function () {
        return this.val();
    },
});

// Template.mytypetemplate.helpers({
// });
