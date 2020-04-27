let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Venue = new Schema(
  {
    name: {type: String, required: true, max: 100},
    buildingName: {type: String, max: 100},
    street: {type: String, required: true, max: 50},
    city: {type: String, required: true, max: 50},
    postCode: {type: String, required: true, max: 10},
    isoCountry: {type: String, required: true, max: 7},
    description: {type: String},
  }
);

Competition.set('toObject', {getters: true, virtuals: true});

module.exports = mongoose.model('Venue', Venue);