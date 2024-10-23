const Lead = require('../models/lead');
  const Campaign = require('../models/campaign');
  
  const processData = async (crmData, marketingData) => {
    try {
      // Process and save campaign data
      const campaigns = await Campaign.insertMany(marketingData);
      
      // Process and save lead data
      const leads = crmData.map(lead => ({
        ...lead,
        campaign: campaigns[0]._id // For demo, associating with first campaign
      }));
      
      await Lead.insertMany(leads);
      
      return { leads, campaigns };
    } catch (error) {
      console.error('Data processing error:', error);
      throw error;
    }
  };
  
  module.exports = { processData };