import express from "express";
import axios from "axios";
// import shopifyRequest from "./utils.js";
import router from "./routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const shop2Appservice = express();

const STORE = process.env.STORE
const API_VERSION = process.env.API_VERSION;

const shopifyApiUrl = `https://${STORE}/admin/api/${API_VERSION}/graphql.json`;


// Shopify API request function
const shopifyRequest = async (query, variables = {}) => {
  try {
    const response = await axios.post(
      shopifyApiUrl,
      { query, variables },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Shopify API request failed : ${error.message}`);
  }
};

// Create product API endpoint
shop2Appservice.post('/api/create-product', async (req, res) => {
  const createProductMutation = `
    mutation productCreate($input: ProductInput!) {
      productCreate(input: $input) {
        product {
          id
          title
        }
      }
    }
  `;

  try {
    const result = await shopifyRequest(createProductMutation, {
      input: req.body,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


shop2Appservice.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
