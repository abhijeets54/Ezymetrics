// src/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const { fetchCRMData, fetchMarketingData } = require('./services/dataFetcher');
const { processData } = require('./services/dataProcessor');
const { generateReport } = require('./utils/reportGenerator');
const { sendAlert } = require('./utils/emailService');
const Lead = require('./models/lead');
const Campaign = require('./models/campaign');

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().populate('campaign');
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/reports', async (req, res) => {
  try {
    const { format = 'pdf' } = req.query;
    const leads = await Lead.find();
    const reportPath = await generateReport(leads, format);
    res.download(reportPath);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const runETL = async () => {
  try {
    console.log('Starting ETL process...');
    const crmData = await fetchCRMData();
    const marketingData = await fetchMarketingData();
    await processData(crmData, marketingData);
    await sendAlert('ETL Complete', 'Data processing completed successfully');
  } catch (error) {
    console.error('ETL Error:', error);
    await sendAlert('ETL Error', error.message);
  }
};

cron.schedule('0 0 * * *', runETL);

runETL();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});