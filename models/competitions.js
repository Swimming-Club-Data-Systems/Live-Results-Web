let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Competition = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    venues: [{ type: ObjectId, ref: 'Venue' }],
    license: { type: String, max: 15 },
    dates: { type: Array, required: true },
  }
);

Competition.set('toObject', { getters: true, virtuals: true });

module.exports = mongoose.model('Competition', Competition);