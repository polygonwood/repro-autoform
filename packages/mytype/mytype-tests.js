// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mytype.js.
import { name as packageName } from "meteor/polygonwood:mytype";

// Write your tests here!
// Here is an example.
Tinytest.add('mytype - example', function (test) {
  test.equal(packageName, "mytype");
});
