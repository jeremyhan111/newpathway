var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
  	service: 'gmail',

});


module.exports = (app) => {
	app.post('/api/email', (req, res) => {
		console.log("heii");

		var mailOptions = {
			from: 'New Pathway <newpathwayeducation@gmail.com>',
			to: 'New Pathway <newpathwayeducation@gmail.com>',
			subject: 'Test',
			text: 'Test'
		}

		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		  }
		});

		console.log(req.body);
	})
}