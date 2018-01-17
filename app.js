require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express();

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_CUE
    }
});

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Welcome.');
});

app.post('/', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let message = req.body.message;

  let formattedHTML = '<h1>FROM: ' + name + '</h1>';
  formattedHTML += '<h3>EMAIL: ' + email + '</h3>';
  formattedHTML += '<h3>PHONE: ' + phone + '</h3>';
  formattedHTML += '<p>MESSAGE: ' + message + '</p>';

  const mailOptions = {
    from: 'travisturner00000@gmail.com',
    to: 'travis@travisturner.io',
    subject: 'TRAVIS CONTACT FORM SUBMISSION',
    html: formattedHTML
  };

  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
   });
   res.send('done');
});

app.listen(port, () => {
  console.log('Server up.');
  console.log(process.env.USER_NAME);
  console.log(process.env.USER_CUE);
});
