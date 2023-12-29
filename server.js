import express from "express";
import axios from "axios";
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
  const { title, productType, vendor, description, price } = req.body;
  
  //Example of Request body, it should be like this
  // const title = "Best Snowboard"
  // const vendor = "Manas Nigam"
  // const productType = "Snowboard"
  // const description = "<p>This is the best snoowboard </p>"
  // const price = 10.12
  
  const createProductMutation = `
   mutation {
        productCreate(input: {
          title: "${title}",
          productType: "${productType}",
          vendor: "${vendor}",
          descriptionHtml: "${description}",
          variants:{
          price:${price} 
          }
        }) {
          product {
            id
          }
        }
      }
  `;

  try {
    const result = await shopifyRequest(createProductMutation);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all products API endpoint
shop2Appservice.get('/api/get-all-products', async (req, res) => {
  
  /* For retrieving all the products form the development store we have to maintain a variable which detects the next page existance "hasNextPage" after fetching first 50 products it fetches the nextpageproduct if it exists then do again query for next 50 products and query goes on untill hastNextPage === false */
  
  const getAllProductsQuery = `
    query getAllProducts($cursor: String) {
      products(first: 50, after: $cursor) {
        pageInfo {
          hasNextPage
        }
        edges {
          node {
            title
          }
        }
      }
    }
  `;

  try {
    const result = await shopifyRequest(getAllProductsQuery);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


shop2Appservice.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
