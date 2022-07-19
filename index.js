const app = require('express')();
require('dotenv').config();
const port = process.env.PORT;
const nodemailer = require('nodemailer');

// Creating a Transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        type: 'OAuth2',
        user: process.env.EMAIL,
        pass: process.env.PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
});


let mailOptions = {
    from: 'cammylabs@gmail.com',
    to: 'esseobongakpan@gmail.com',
    subject: 'Testing123',
    text: "Hello Boss"
};


transporter.sendMail(mailOptions, function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log("Email sent successfully");
    }
})


app.listen(port, ()=>{
    console.log(`nodemail services are runninig...`, port)
})