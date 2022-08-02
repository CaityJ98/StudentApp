const mongoose = require('mongoose');
const {DB_CONNECTION} = require('./config');


mongoose.connect(DB_CONNECTION);
mongoose.connect('mongodb://localhost:27017/student-services')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', console.log.bind(console, 'DB connected!'));

module.exports = db;