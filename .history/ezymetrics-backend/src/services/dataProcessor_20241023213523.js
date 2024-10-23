const Lead = require();
const Campaign = require('../models/campaign');

const processData = async (crmData, marketingData) => {
  try {
    // Process and save campaign data
    const campaigns = await Campaign.insertMany(marketingData);
    
    if (!campaigns.length) {
      throw new Error('No campaigns created');
    }
    
    // Process and save lead data
    const leads = crmData.map(lead => ({
      ...lead,
      campaign: campaigns[0]._id
    }));
    
    await Lead.insertMany(leads);
    
    return { leads, campaigns };
  } catch (error) {
    console.error('Data processing error:', error);
    throw error;
  }
};

module.exports = { processData };