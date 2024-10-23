// src/models/lead.js
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

// src/models/campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: String,
  platform: String,
  startDate: Date,
  endDate: Date,
  budget: Number,
  metrics: {
    impressions: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('Campaign', campaignSchema);