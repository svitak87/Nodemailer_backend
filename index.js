require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 3001;


server.use(morgan("dev"));
server.use(cors())
server.use(express.json())

server.use('/contact', require('./routes/contact'));

const main = () => {
    server.listen(PORT, () => {
        console.log(`server is running on port: http://localhost:${PORT}`)
    })
}

main()