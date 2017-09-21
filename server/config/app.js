var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.PORT || 3000, function() {
    console.log('App listening on port %d %s', this.address().port, app.settings.env);
  });
};