import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not configured');
    return false;
  }

  const { firstName, lastName, email, phone, service, message } = formData;
  
  // Create formatted HTML email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #2563eb; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #d1d5db; }
        .message-box { background: white; padding: 15px; border-radius: 4px; border: 1px solid #d1d5db; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
        .badge { display: inline-block; background: #10b981; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; margin-left: 10px; }
        .sender-info { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 4px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>D N PANCHASRA & CO.</h1>
        <p>New Contact Form Submission <span class="badge">NEW</span></p>
      </div>
      
      <div class="content">
        <div class="sender-info">
          <strong>📧 From:</strong> ${firstName} ${lastName} &lt;${email}&gt;<br>
          <strong>📞 Phone:</strong> ${phone || 'Not provided'}<br>
          <strong>🎯 Service:</strong> ${service || 'Not specified'}
        </div>
        
        <div class="field">
          <span class="label">Full Name:</span>
          <div class="value">${firstName} ${lastName}</div>
        </div>
        
        <div class="field">
          <span class="label">Email Address:</span>
          <div class="value"><a href="mailto:${email}">${email}</a></div>
        </div>
        
        <div class="field">
          <span class="label">Phone Number:</span>
          <div class="value"><a href="tel:${phone}">${phone || 'Not provided'}</a></div>
        </div>
        
        <div class="field">
          <span class="label">Service Required:</span>
          <div class="value">${service || 'Not specified'}</div>
        </div>
        
        <div class="field">
          <span class="label">Message:</span>
          <div class="message-box">${message}</div>
        </div>
      </div>
      
      <div class="footer">
        <p>This email was sent from the contact form on your website.</p>
        <p><strong>D N PANCHASRA & CO.</strong> - Professional Chartered Accountant Services</p>
        <p><em>Click the email or phone links above to respond directly</em></p>
      </div>
    </body>
    </html>
  `;

  // Create plain text version
  const textContent = `
NEW CONTACT FORM SUBMISSION
D N PANCHASRA & CO.

Full Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Required: ${service || 'Not specified'}

Message:
${message}

---
This email was sent from the contact form on your website.
D N PANCHASRA & CO. - Professional Chartered Accountant Services
  `;

  const emailData = {
    to: 'cadarshanpanchasra@gmail.com',
    from: {
      email: 'cadarshanpanchasra@gmail.com',
      name: 'D N PANCHASRA & CO. - Website Contact Form'
    },
    subject: `💼 New Contact: ${firstName} ${lastName} - ${service || 'General Inquiry'}`,
    text: textContent,
    html: htmlContent,
    replyTo: {
      email: email,
      name: `${firstName} ${lastName}`
    }
  };

  try {
    await sgMail.send(emailData);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}