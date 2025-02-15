const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com",
        pass: "your-password",
    },
});

const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-email@gmail.com",
    subject: "Test Email from Node.js",
    text: "Hello, this is a test email sent from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
