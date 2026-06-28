const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, program, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Gmail SMTP settings
  let EMAIL_CONFIG = {
    senderUser: 'info.maruf010@gmail.com',
    senderPassword: 'fvin oidu ngde zuga',
    recipients: ['info.maruf010@gmail.com', 'mhbijoy013@gmail.com']
  };

  try {
    const fs = require('fs');
    const path = require('path');
    const configPath = path.join(process.cwd(), 'src/app/core/constants/email-config.json');
    if (fs.existsSync(configPath)) {
      const rawData = fs.readFileSync(configPath, 'utf8');
      const parsedConfig = JSON.parse(rawData);
      if (parsedConfig.senderUser) EMAIL_CONFIG.senderUser = parsedConfig.senderUser;
      if (parsedConfig.senderPassword) EMAIL_CONFIG.senderPassword = parsedConfig.senderPassword;
      if (parsedConfig.recipients && Array.isArray(parsedConfig.recipients)) {
        EMAIL_CONFIG.recipients = parsedConfig.recipients;
      }
    }
  } catch (e) {
    console.log("Error loading config:", e);
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_CONFIG.senderUser,
      pass: EMAIL_CONFIG.senderPassword,
    },
  });

  const programsMap = {
    women: "Women's Health & Menopause",
    bone: "Bone Health & Osteoporosis",
    ageing: "Healthy Ageing & Balance",
    men: "Men's Health",
    chronic: "Chronic Disease Support",
    other: "Other Clinical Rehabilitation"
  };

  const selectedProgram = programsMap[program] || program;

  const sendPromises = EMAIL_CONFIG.recipients.map(recipient => {
    const mailOptions = {
      from: `"QEP Website Enquiry" <${EMAIL_CONFIG.senderUser}>`,
      replyTo: email,
      to: recipient,
      subject: `New Initial Assessment Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <!-- Brand Header -->
          <div style="background: #0B0F16; color: white; padding: 25px 20px; text-align: center; border-bottom: 3px solid #46A6E5;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">QEP</h1>
            <p style="margin: 5px 0 0; opacity: 0.8; font-size: 10px; text-transform: uppercase; letter-spacing: 2px;">Queensland Exercise Physiology</p>
          </div>
          
          <!-- Content Body -->
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; font-size: 18px; margin-top: 0;">User Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 150px; font-size: 14px;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #333; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #333; font-size: 14px;"><a href="mailto:${email}" style="color: #46A6E5; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; color: #333; font-size: 14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Program:</strong></td>
                <td style="padding: 10px 0; color: #46A6E5; font-size: 14px; font-weight: bold;">${selectedProgram}</td>
              </tr>
            </table>

            <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 30px; font-size: 18px;">Message / Additional Notes</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; color: #555; line-height: 1.6; border-left: 4px solid #46A6E5; font-style: italic;">
              ${(message || 'No additional notes or medical conditions provided.').replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; color: #888; font-size: 12px;">
            <p style="margin: 0;">This email was automatically generated by the QEP Website booking portal.</p>
          </div>
        </div>
      `,
    };
    return transporter.sendMail(mailOptions);
  });

  try {
    await Promise.all(sendPromises);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message || error });
  }
};
