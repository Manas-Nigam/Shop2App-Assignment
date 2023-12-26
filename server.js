const express = require("express");
const axios = require("axios");
require("dotenv").config();

// All env variable here
const PORT = process.env.PORT;
const store_name = process.env.STORE;
const version = process.env.VERSION;

const shop2Appservice = express();


const shopifyRequestUrl = `https://${store_name}.myshopify.com/admin/api/${version}/graphql.json`;


// Shopify request function
async function shopifyRequest(query, variables = {}) {
  const response = axios.post(
    shopifyRequestUrl,
    { query, variables },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
      },
    }
  );
  return response.data;
}

shop2Appservice.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
