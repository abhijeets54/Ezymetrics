const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const generateReport = async (data, format = 'pdf') => {
  const reportDir = path.join(__dirname, '../../reports');
  

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


