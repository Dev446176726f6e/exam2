const express = require("express");
const productRoute = require("./products");
const customerRoute = require("./customers");
const contractRoute = require("./contracts");
const paymentRoute = require("./creditPayments");

const router = express.Router();

router.use("/products", productRoute);
router.use("/customers", customerRoute);
router.use("/contracts", contractRoute);
router.use("/payments", paymentRoute);

module.exports = router;
