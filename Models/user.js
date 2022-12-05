//mongoose schema
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    email: String,
    password: Number
   
  });

  module.exports = mongoose.model('User', userSchema);