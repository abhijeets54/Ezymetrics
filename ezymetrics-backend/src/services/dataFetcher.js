const fetchCRMData = async () => {
    // Simulating CRM API data
    return [
      {
        name: 'John Doe',
        email: 'john@example.com',
        source: 'Website',
        status: 'New'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        source: 'LinkedIn',
        status: 'Qualified'
      }
    ];
  };
  
  const fetchMarketingData = async () => {
    // Simulating Marketing Platform data
    return [
      {
        name: 'Summer Sale',
        platform: 'Facebook',
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-06-30'),
        budget: 5000,
        metrics: {
          impressions: 50000,
          clicks: 2500,
          conversions: 100
        }
      }
    ];
  };
  
  module.exports = {
    fetchCRMData,
    fetchMarketingData
  };
  
 