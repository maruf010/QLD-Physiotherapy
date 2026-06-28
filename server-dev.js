const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Load dynamic config if exists, otherwise use fallback
let EMAIL_CONFIG = {
  senderUser: 'info.maruf010@gmail.com',
  senderPassword: 'fvin oidu ngde zuga',
  recipients: ['info.maruf010@gmail.com', 'mhbijoy013@gmail.com']
};

try {
  const fs = require('fs');
  const path = require('path');
  const configPath = path.join(__dirname, 'src/app/core/constants/email-config.json');
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
  console.log("Using default credentials due to parsing error:", e.message);
}

app.post('/api/send-email', (req, res) => {
  const { name, email, phone, program, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_CONFIG.senderUser,
      pass: EMAIL_CONFIG.senderPassword
    }
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
      from: `"QEP Website" <${EMAIL_CONFIG.senderUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New Initial Assessment Request - ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F8FAFC; padding: 40px 10px; color: #1E293B;">
          <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
            <!-- Brand Header -->
            <div style="background-color: #0B0F16; padding: 30px; text-align: center; border-bottom: 3px solid #46A6E5;">
              <h1 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">QEP</h1>
              <p style="color: #46A6E5; margin: 5px 0 0 0; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">Queensland Exercise Physiology</p>
            </div>
            
            <!-- Content Body -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #1E293B; margin-top: 0; margin-bottom: 24px; font-size: 20px; font-weight: 700; border-bottom: 1.5px solid #F1F5F9; padding-bottom: 12px;">New Assessment Request</h2>
              
              <p style="font-size: 15px; line-height: 1.6; color: #64748B; margin-bottom: 30px;">
                A new initial clinical assessment request has been submitted from the website booking form. Here are the details:
              </p>

              <!-- Details List -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #475569; width: 180px; font-size: 14px;">Client Name</td>
                  <td style="padding: 12px 0; color: #1E293B; font-size: 15px; font-weight: 500;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #475569; font-size: 14px;">Email Address</td>
                  <td style="padding: 12px 0; color: #1E293B; font-size: 15px;"><a href="mailto:${email}" style="color: #46A6E5; text-decoration: none; font-weight: 500;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #475569; font-size: 14px;">Phone Number</td>
                  <td style="padding: 12px 0; color: #1E293B; font-size: 15px;"><a href="tel:${phone}" style="color: #1E293B; text-decoration: none; font-weight: 500;">${phone}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #475569; font-size: 14px;">Program of Interest</td>
                  <td style="padding: 12px 0; color: #46A6E5; font-size: 15px; font-weight: 600;">${selectedProgram}</td>
                </tr>
              </table>

              <!-- Message block -->
              <div style="background-color: #F8FAFC; border-radius: 8px; padding: 20px; border-left: 4px solid #46A6E5; margin-bottom: 10px;">
                <h4 style="margin-top: 0; margin-bottom: 8px; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Client Notes & Conditions</h4>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; font-style: italic;">
                  "${message || 'No additional notes or medical conditions provided.'}"
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #F8FAFC; padding: 20px 30px; text-align: center; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0; font-size: 12px; color: #94A3B8;">This email was automatically generated by the QEP Website booking portal.</p>
            </div>
          </div>
        </div>
      `
    };
    return transporter.sendMail(mailOptions);
  });

  Promise.all(sendPromises)
    .then(results => {
      console.log('All emails sent successfully:', results.map(r => r.response));
      return res.status(200).json({ success: true });
    })
    .catch(error => {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, error: error.message });
    });
});

app.listen(4000, () => {
  console.log("Email API dev server running on port 4000");
});
