const express = require("express");
const { getAllproducts, createProduct, updateProduct, deleteProduct } = require("../controller/productcontroller");

const router = express.Router();

router.route("/products").get(getAllproducts).post(createProduct);
router.route("/products/new").post(createProduct); // Define the route for creating a new product
router.route("/products/:id").put(updateProduct).delete(deleteProduct)  // Correct the route for updating a product

module.exports = router;
