let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let User = new Schema(
  {
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    orgs: [{ type: ObjectId, ref: 'Organisation' }],
    email: {type: String, required: true},
    password: {type: String, required: true},
    permissions: {type: Array, required: true},
  }
);

User.set('toObject', { getters: true, virtuals: true });

module.exports = mongoose.model('User', User);