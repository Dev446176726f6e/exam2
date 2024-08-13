const db = require("../config/db");

const getAllProducts = (req, res) => {
  db.query("SELECT * FROM products", (error, result) => {
    if (error) {
      console.log("Error selecting products.!");
      return res.status(500).json({ error: "Internal server error.!" });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "Products not found",
      });
    }
    res.json(result);
  });
};

const soldBetween = (req, res) => {
  const { date1, date2 } = req.body;
  db.query(
    "SELECT * FROM products p JOIN contracts c ON c.contractid = p.productid WHERE c.contractdate BETWEEN ? and ?",
    [date1, date2],
    (error, result) => {
      if (error) {
        console.log("Error selecting products.!");
        return res.status(500).json({ error: "Internal server error.!" });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Products not found",
        });
      }
      res.json(result);
    }
  );
};

const addProduct = (req, res) => {
  const {
    ProductName,
    Processor,
    GraphicsCard,
    Motherboard,
    RAM,
    ROM,
    PowerSupply,
    CaseBox,
    Cooling,
    Price,
    StockQuantity,
    Info,
  } = req.body;
  db.query(
    "INSERT INTO products( ProductName, Processor, GraphicsCard, Motherboard, RAM, ROM, PowerSupply, CaseBox, Cooling, Price, StockQuantity, Info ) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
    [
      ProductName,
      Processor,
      GraphicsCard,
      Motherboard,
      RAM,
      ROM,
      PowerSupply,
      CaseBox,
      Cooling,
      Price,
      StockQuantity,
      Info,
    ],
    (error, result) => {
      if (error) {
        console.log("Error adding new product");
        return res.status(500).json({
          message: "Error adding new product.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "New product added.",
        productID: result.productID,
      });
    }
  );
};

const updateProduct = (req, res) => {
  const productId = req.params.id;
  const {
    ProductName,
    Processor,
    GraphicsCard,
    Motherboard,
    RAM,
    ROM,
    PowerSupply,
    CaseBox,
    Cooling,
    Price,
    StockQuantity,
    Info,
  } = req.body;
  db.query(
    "UPDATE products SET ProductName = ?, Processor = ?, GraphicsCard = ?, Motherboard = ?, RAM = ?, ROM = ?, PowerSupply = ?, CaseBox = ?, Cooling = ?, Price = ?, StockQuantity = ?, Info = ? \
    WHERE ProductID = ?",
    [
      ProductName,
      Processor,
      GraphicsCard,
      Motherboard,
      RAM,
      ROM,
      PowerSupply,
      CaseBox,
      Cooling,
      Price,
      StockQuantity,
      Info,
      productId,
    ],
    (error, result) => {
      if (error) {
        console.log("Error updating new product");
        return res.status(500).json({
          message: "Error updating product.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "Product updated.",
        productID: result.productID,
      });
    }
  );
};

const deleteProduct = (req, res) => {
  const productId = req.params.id;
  db.query(
    "DELETE FROM products WHERE ProductId = ?",
    [productId],
    (error, result) => {
      if (error) {
        console.log("Error deleting product");
        return res.status(500).json({
          message: "Error deleting product.",
          error: "Internal server error.",
        });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Product not found",
        });
      } else {
        res.status(201).json({
          message: "Product deleted.",
        });
      }
    }
  );
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  db.query(
    "SELECT * FROM products WHERE productId = ?",
    [productId],
    (error, result) => {
      if (error) {
        console.log("Error selecting product by id.!");
        return res.status(500).json({ error: "Internal server error.!" });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      res.json(result);
    }
  );
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  soldBetween,
};
