// src/utils/reportGenerator.js
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const generateReport = async (data, format = 'pdf') => {
  const reportDir = path.join(__dirname, '../../reports');
  
  // Create reports directory if it doesn't exist
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }

  const filename = path.join(reportDir, `report-${Date.now()}.${format}`);
  
  if (format === 'pdf') {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filename));
    
    doc.fontSize(25).text('EzyMetrics Report', 100, 100);
    doc.fontSize(12).text(JSON.stringify(data, null, 2), 100, 150);
    
    doc.end();
  }
  
  return filename;
};

module.exports = { generateReport };

// src/utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendAlert = async (subject, message) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to self for testing
      subject,
      text: message
    });
    console.log('Alert email sent successfully');
  } catch (error) {
    console.error('Email sending failed:', error);
  }
};

module.exports = { sendAlert };