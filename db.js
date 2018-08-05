var config = require('./config');
var pgp = require('pg-promise')();
var connectionString = config.db;
var db = pgp(connectionString);

module.exports = {
    pgp, db
};