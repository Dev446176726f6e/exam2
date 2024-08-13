const express = require("express");
const {
  getContracts,
  addContract,
  updateContract,
  deleteContract,
  getContractById,
} = require("../controllers/contracts");

const router = express.Router();

router.get("/get", getContracts);
router.post("/add", addContract);
router.put("/update/:id", updateContract);
router.delete("/delete/:id", deleteContract);
router.get("/get/:id", getContractById);

module.exports = router;
