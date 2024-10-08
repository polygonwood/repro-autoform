Package.describe({
  name: 'polygonwood:mytype',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.2');

  api.use([
    'ecmascript',
    'reactive-var',
    'templating',
    'aldeed:autoform@8.0.0-rc.4',
  ], 'client');

  api.addFiles([
    'mytype.js',
    'mytype.html',
  ], 'client');
});



Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('polygonwood:mytype');
  api.mainModule('mytype-tests.js');
});
