const express = require("express");
const axio = require("axios");
require("dotenv").config();

const PORT = process.env.PORT;
const shop2Appservice = express();

shop2Appservice.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
