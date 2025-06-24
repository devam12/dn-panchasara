// Company Profile Generator
export function generateCompanyProfile() {
  const companyData = {
    firmName: "D N PANCHASRA & CO.",
    designation: "CHARTERED ACCOUNTANT",
    established: "Professional CA Practice",
    registration: "ICAI Registered",
    
    services: [
      "Tax Planning & Compliance",
      "Financial Statement Preparation",
      "Business Advisory Services", 
      "Audit & Assurance",
      "Company Registration",
      "GST Registration & Filing",
      "Income Tax Returns",
      "Corporate Restructuring"
    ],
    
    qualifications: [
      "Chartered Accountant (CA) - ICAI",
      "Bachelor of Commerce",
      "Advanced Certification in Taxation",
      "Member of Institute of Chartered Accountants of India"
    ],
    
    expertise: [
      "Individual & Corporate Tax Planning",
      "Financial Analysis & Reporting", 
      "Regulatory Compliance",
      "Business Process Optimization",
      "Risk Management Advisory"
    ]
  };

  // Create HTML content for the profile
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${companyData.firmName} - Company Profile</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
        .firm-name { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 5px; }
        .designation { font-size: 16px; color: #1d4ed8; font-weight: 600; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px; }
        .list-item { margin-bottom: 8px; padding-left: 20px; position: relative; }
        .list-item:before { content: "✓"; color: #10b981; font-weight: bold; position: absolute; left: 0; }
        .contact-info { background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 30px; }
        .badge { display: inline-block; background: #2563eb; color: white; padding: 5px 12px; border-radius: 15px; font-size: 12px; font-weight: bold; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="firm-name">${companyData.firmName}</div>
        <div class="designation">${companyData.designation}</div>
        <div class="badge">CA CERTIFIED</div>
        <div class="badge">ICAI REGISTERED</div>
      </div>

      <div class="section">
        <div class="section-title">Professional Qualifications</div>
        ${companyData.qualifications.map(qual => `<div class="list-item">${qual}</div>`).join('')}
      </div>

      <div class="section">
        <div class="section-title">Core Services</div>
        ${companyData.services.map(service => `<div class="list-item">${service}</div>`).join('')}
      </div>

      <div class="section">
        <div class="section-title">Areas of Expertise</div>
        ${companyData.expertise.map(exp => `<div class="list-item">${exp}</div>`).join('')}
      </div>

      <div class="contact-info">
        <div class="section-title">Contact Information</div>
        <p><strong>Firm:</strong> ${companyData.firmName}</p>
        <p><strong>Professional:</strong> Chartered Accountant</p>
        <p><strong>Registration:</strong> Institute of Chartered Accountants of India (ICAI)</p>
        <p><strong>Email:</strong> contact@dnpanchasra.com</p>
        <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
      </div>
    </body>
    </html>
  `;

  // Create and download the HTML file
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${companyData.firmName.replace(/[^a-zA-Z0-9]/g, '_')}_Company_Profile.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}