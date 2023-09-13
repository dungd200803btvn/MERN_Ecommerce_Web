const nodeMailer = require("nodemailer");
const sendEmail = async (options)=>{
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: process.env.SMPT_SERVICE,
        auth: {
          user: "ledung200803@gmail.com",
          pass: "blnc zjoy epip emak",
        },
      });
    
      const mailOptions = {
        from: "ledung200803@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
      };
      await transporter.sendMail(mailOptions);
}



module.exports = sendEmail;