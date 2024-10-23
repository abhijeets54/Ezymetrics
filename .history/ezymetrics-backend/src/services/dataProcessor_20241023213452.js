import { insertMany } from '../models/lead';
import { insertMany as _insertMany } from '../models/campaign';

const processData = async (crmData, marketingData) => {
  try {
    // Process and save campaign data
    const campaigns = await _insertMany(marketingData);
    
    if (!campaigns.length) {
      throw new Error('No campaigns created');
    }
    
    // Process and save lead data
    const leads = crmData.map(lead => ({
      ...lead,
      campaign: campaigns[0]._id
    }));
    
    await insertMany(leads);
    
    return { leads, campaigns };
  } catch (error) {
    console.error('Data processing error:', error);
    throw error;
  }
};

export default { processData };