const express = require("express");
const {
  getPayments,
  addPayment,
  updatePayment,
  deletePayment,
  getPaymentById,
} = require("../controllers/creditPayments");

const router = express.Router();

router.get("/get", getPayments);
router.post("/add", addPayment);
router.put("/update/:id", updatePayment);
router.delete("/delete/:id", deletePayment);
router.get("/get/:id", getPaymentById);

module.exports = router;
