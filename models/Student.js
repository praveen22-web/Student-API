const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: String,
  age: Number,
  city: String
});

module.exports = mongoose.model('Student', studentSchema);
