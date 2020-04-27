let mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectId;
let bcrypt = require('bcryptjs');

let mongoDB = 'mongodb://localhost:27017/competitions';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

// Bind connection to error event to get notified about con errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
