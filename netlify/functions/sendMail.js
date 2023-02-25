var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "kmarong@hotmail.com",
    pass: "Dave1011",
  },
});

var mailOptions = {
  from: "kmarong@hotmail.com",
  to: "kmarong@hotmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
