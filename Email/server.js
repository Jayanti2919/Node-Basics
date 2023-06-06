// This code will not work if MFA is enabled on the sender's account

var nodemailer = require('nodemailer');
var dotenv = require('dotenv')

dotenv.config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from: process.env.EMAIL,
  to: process.env.RE_EMAIL,
  subject: 'Sending Email using Node.js nodemailer module',
  text: 'This is a test email'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
