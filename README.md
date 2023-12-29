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
   ```
   
2. Create a .env file:
    
   ```sh
   SHOP=manas-development-store.myshopify.com
   ACCESS_TOKEN=your-access-token
   API_VERSION=2023-04
   PORT=3000
   ```
   
# API endpoints


## 1. Create a Product

- Endpoint: 'POST /api/create-product'
- Description: Create a new product in the "Manas Development Store."
- Request: http://localhost:3000/api/create-product

![image](https://github.com/Manas-Nigam/Shop2App-Assignment/assets/82052968/a1a12ba6-b69a-4fd5-a31e-258cdd00767b)


## 2. Get All Products

- Endpoint: 'GET /api/get-all-products'
- Description: Retrieve all products from the "Manas Development Store."
- Request: http://localhost:3000/api/get-all-products


![image](https://github.com/Manas-Nigam/Shop2App-Assignment/assets/82052968/10a3a947-0995-4d0b-b627-75cb821672b4)


# Reference Links:

- https://partners.shopify.com/signup
- https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores#create-a-development-store
- https://shopify.dev/docs/apps/getting-started/create
- https://shopify.dev/docs/api/admin-graphql



