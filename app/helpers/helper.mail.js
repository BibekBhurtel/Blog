const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    // secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

async function main(to, subject, html) {
    try{
        const info = await transporter.sendMail({
            to,
            subject,
            html,
        });
    
        console.log("Message sent: %s", info.messageId);
    }catch(err){
        console.log(`Error sending email: ${err.message}`);
    }
}
// main("ram@gmail.com","data","ram")

module.exports = main;