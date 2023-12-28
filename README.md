# Manas Development Store - Shopify API Integration with Node.js and Express

This is a simple Node.js Express application that interacts with the Shopify API using GraphQL. It provides API endpoints to create a product and retrieve all products from the "Manas Development Store."

## Prerequisites

Before running the application, ensure you have the following:

- Node.js installed
- npm (Node Package Manager) installed
- Shopify Partner account
- Shopify Development Store (Manas Development Store)
- Shopify API credentials (API key, API password, and API version)
- Your `.env` file with the necessary credentials (refer to `.env.example`)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Manas-Nigam/Shop2App-Assignment.git
   cd manas-development-store-app

# API endpoints


## 1. Create a Product

- Endpoint: 'POST /api/create-product'
- Description: Create a new product in the "Manas Development Store."
- Request: http://localhost:3000/api/create-product

## 2. Get All Products

- Endpoint: 'GET /api/get-all-products'
- Description: Retrieve all products from the "Manas Development Store."
- Request: http://localhost:3000/api/get-all-products
