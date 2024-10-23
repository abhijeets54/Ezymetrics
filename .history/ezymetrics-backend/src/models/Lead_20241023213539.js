const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  source: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true }
});

module.exports = mongoose.model('lead', leadSchema);