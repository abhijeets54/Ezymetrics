# EzyMetrics Backend

A backend service for EzyMetrics that handles data integration, processing, and reporting functionalities.

## Features

- CRM and Marketing platform integration
- Data ETL processing
- Report generation (PDF/CSV)
- Email alerts
- RESTful API endpoints

## Tech Stack

- Node.js & Express.js
- MongoDB with Mongoose
- Node-cron for scheduled tasks
- Nodemailer for email notifications
- PDFKit for PDF generation

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ezymetrics-backend.git
cd ezymetrics-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start MongoDB:
```bash
mongod
```

5. Run the application:
```bash
npm start
```

## API Endpoints

### Leads
- GET `/api/leads` - Retrieve all leads
- GET `/api/leads/:id` - Retrieve specific lead

### Campaigns
- GET `/api/campaigns` - Retrieve all campaigns
- GET `/api/campaigns/:id` - Retrieve specific campaign

### Reports
- GET `/api/reports?format=pdf&type=leads` - Generate lead report
- GET `/api/reports?format=csv&type=campaigns` - Generate campaign report

## Data Models

### Lead
- id: String
- name: String
- email: String
- source: String
- status: String
- createdAt: Date
- metrics: Object

### Campaign
- id: String
- name: String
- platform: String
- startDate: Date
- endDate: Date
- metrics: Object

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT