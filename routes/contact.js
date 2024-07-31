const express = require("express");
const route = express.Router();
const sendContactEmail  = require("../nodemailer/nodemailerConfig");

route.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendContactEmail(name, email, message);
    res
      .status(200)
      .json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
});

module.exports = route;