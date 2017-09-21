//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://admin:password@ds127044.mlab.com:27044/cen3031_assignments', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyB0edXlIxN5P-uyvuSJB5KjSfHpQfnvI7s'
  },
  port: 8080
};