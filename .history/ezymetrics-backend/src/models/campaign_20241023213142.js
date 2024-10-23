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