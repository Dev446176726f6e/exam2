const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  soldBetween,
} = require("../controllers/products");

const router = express.Router();

router.get("/get", getAllProducts);
router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get/:id", getProductById);
router.get("/soldBetween", soldBetween)

module.exports = router;
