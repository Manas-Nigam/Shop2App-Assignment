import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const store_name = process.env.STORE;
const version = process.env.VERSION;

const shopifyRequestUrl = `https://${store_name}.myshopify.com/admin/api/${version}/graphql.json`;

// Shopify request function
export default async function shopifyRequest(query, variables = {}) {
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
