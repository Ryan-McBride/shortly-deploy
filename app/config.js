// var Bookshelf = require('bookshelf');
var mongoose = require('mongoose');
var path = require('path');
var Schema = mongoose.Schema;

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

var options = {
  db: 'shortlymongoDb',
  user: 'your_database_user',
  pass: 'password',

}

mongoose.connect('mongodb:localhost/db', options);

var LinksSchema = new Schema({
  increments: {'$inc':{id:1}},
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
  // timestamps: Date,
})

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

var UsersSchema = new Schema({
  increments: {'$inc':{id:1}},
  username: {type: String, index: {unique: true}} //unique
  password: String
})

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = db;
