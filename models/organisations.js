let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Organisation = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    clubCode: { type: String, max: 4 },
    venues: [{ type: ObjectId, ref: 'Venue' }], // Home pools
    website: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    verified: { type: Boolean, required: true, default: false },
    provider: { type: Boolean, required: true, default: false } 
  }
);

Organisation.set('toObject', { getters: true, virtuals: true });

module.exports = mongoose.model('Organisation', Organisation);