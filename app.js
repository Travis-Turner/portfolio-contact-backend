require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

var app = express();

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_CUE
    }
});

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({credentials: true}));


app.get('/', (req, res) => {
  res.send('Welcome.');
});

app.post('/', (req, res) => {
  let formattedHTML = '';
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  formattedHTML = '<h1>FROM: ' + name + '</h1>';
  //handle optional fields
  if (req.body.phone){
    let phone = req.body.phone;
    formattedHTML += '<h3>PHONE: ' + phone + '</h3>';
  }
  if (req.body.website){
    let website = req.body.website;
    formattedHTML += '<h3>WEBSITE: ' + website + '</h3>';
  }
  formattedHTML += '<h3>EMAIL: ' + email + '</h3>';
  formattedHTML += '<p>MESSAGE: ' + message + '</p>';

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: 'TRAVIS CONTACT FORM SUBMISSION',
    html: formattedHTML
  };

  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
   });
   res.send('hi');
});

app.listen(port, () => {
  console.log('Server up.');
  console.log(process.env.USER_NAME);
  console.log(process.env.USER_CUE);
});
