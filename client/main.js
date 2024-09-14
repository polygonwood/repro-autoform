import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import popper from '@popperjs/core';
var moment = require('moment');
import '/client/theme/bootstrap.js';


import 'meteor/aldeed:autoform/static'
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/static'
AutoFormThemeBootstrap4.load();
AutoForm.setDefaultTemplate('bootstrap4');

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.info.helpers({
  formSchema() {
    let schema = new SimpleSchema({
      name: {
        type: String,
        label: "Name",
        autoform: {
          someOption: "someValue",
        }
      },
      age: {
        type: Number,
        label: "Age",
      },
      date: {
        type: Date,
        label: "Date",
      },
      myfield: {
        type: Date,
        label: "My Field",
        autoform: {
          type: "mytype",
          someObject: {
            someNestedOption: "someNestedValue",
            someNestedOption2: "someNestedValue2"
          },
        }
      }
    },
      // { tracker: Tracker }
    );
    console.log(schema);
    return schema;
  },
  // textHelper() {
  //   return "This is a helper";
  // },
});