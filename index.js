require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use('/contact', require('./routes/contact'));

server.get('/', (req, res) => {
  res.send('Servidor en ejecución');
});

server.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

