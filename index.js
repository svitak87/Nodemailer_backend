require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

// Asegúrate de que esta línea maneje la ruta '/contact'
server.use('/contact', require('./routes/contact'));

// Manejo de ruta raíz para pruebas
server.get('/', (req, res) => {
  res.send('Servidor en ejecución');
});

server.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

