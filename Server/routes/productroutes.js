const express = require ("express");
const { getAllproducts } = require("../controller/productcontroller");

const Router=express.Router();


Router.route("/Products").get(getAllproducts)
module.exports =  Router;