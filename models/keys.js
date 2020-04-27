let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Key = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    org: { type: ObjectId, ref: 'Organisation', required: true },
    created: { type: Date, required: true },
    expires: { type: Date, required: true },
    key: { type: String, required: true, max: 256 },
  }
);

Key.set('toObject', { getters: true, virtuals: true });

module.exports = mongoose.model('Key', Key);