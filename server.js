import express from "express";
import shopifyRequest from "./utils.js";
import router from "./routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const shop2Appservice = express();

shop2Appservice.use(router);

shop2Appservice.listen(PORT, () => {
  shopifyRequest({}, {});
  console.log(`Server is running on port ${PORT}`);
});
