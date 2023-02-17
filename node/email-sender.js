var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayouniameni39@gmail.com',
    pass: 'gtksgxnxierscbwr'
  }
});

var mailOptions = {
  from: 'ayouniameni39@gmail.com',
  to: 'amaniayouni50@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});