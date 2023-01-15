const mongoose = require('mongooose');

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the bootcamp'],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating for the bootcamp'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the bootcamp'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide price for the bootcamp'],
  },
});

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema);

module.exports = Bootcamp;
