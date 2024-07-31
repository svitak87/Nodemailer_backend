const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", 
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD, 
  },
});

const sendContactEmail = async (name, email, message) => {
  try {
    const info = await transporter.sendMail({
      from: `${name} <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_USER, 
      subject: "Buzón de contacto Portafolio",
      text: `Mensaje de: ${email}\n\n${message}`, 
    });
    console.log("Correo electrónico enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    throw error;
  }
};

module.exports = sendContactEmail;
