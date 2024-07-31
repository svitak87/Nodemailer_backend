require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:4000', // Permite solicitudes desde localhost:4000
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

server.use(morgan("dev"));
server.use(cors(corsOptions)); // Aplica la configuración de CORS
server.use(express.json());

server.use('/contact', require('./routes/contact'));

const main = () => {
    server.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
    });
};

main();
