require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;


const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  allowedHeaders: ["Content-Type"], 
};

server.use(morgan("dev"));
server.use(cors(corsOptions));
server.use(express.json());


server.use('/contact', require('./routes/contact'));


const main = () => {
    server.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
    });
};

main();
