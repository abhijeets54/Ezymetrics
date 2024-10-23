const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  source: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' }
});

module.exports = mongoose.model('Lead', leadSchema);

