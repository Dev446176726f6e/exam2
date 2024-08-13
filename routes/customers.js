const express = require("express");
const {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
} = require("../controllers/customers");

const router = express.Router();

router.get("/get", getCustomers);
router.post("/add", addCustomer);
router.put("/update/:id", updateCustomer);
router.delete("/delete/:id", deleteCustomer);
router.get("/get/:id", getCustomerById);

module.exports = router;
