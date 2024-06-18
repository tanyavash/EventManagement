const express = require('express');
const dotenv = require("dotenv").config();
const app = express();

const ConnectDb = require('./config/dbconnection');

const PORT = process.env.PORT || 3050;

ConnectDb();
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});