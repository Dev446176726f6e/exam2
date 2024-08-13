const db = require("../config/db");

const getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, result) => {
    if (error) {
      console.log("Error selecting customers.!");
      return res.status(500).json({ error: "Internal server error.!" });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "Customers not found",
      });
    }
    res.json(result);
  });
};

const addCustomer = (req, res) => {
  const { FirstName, LastName, PassportID, Email, PhoneNumber, Adress } =
    req.body;
  db.query(
    "INSERT INTO customers ( FirstName, LastName, PassportID, Email, PhoneNumber, Adress ) \
    VALUES (?, ?, ?, ?, ?, ?)",
    [FirstName, LastName, PassportID, Email, PhoneNumber, Adress],
    (error, result) => {
      if (error) {
        console.log("Error adding new customer");
        return res.status(500).json({
          message: "Error adding new customer.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "New customer added.",
        customer: result.CustomerID,
      });
    }
  );
};

const updateCustomer = (req, res) => {
  const customerId = req.params.id;
  const { FirstName, LastName, PassportID, Email, PhoneNumber, Adress } =
    req.body;
  db.query(
    "UPDATE customers SET FirstName = ?, LastName = ?, PassportID = ?, Email = ?, PhoneNumber = ?, Adress = ?  \
    WHERE CustomerID = ?",
    [FirstName, LastName, PassportID, Email, PhoneNumber, Adress, customerId],
    (error, result) => {
      if (error) {
        console.log("Error updating new customer");
        return res.status(500).json({
          message: "Error updating customer.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "Customer updated.",
        customerId: customerId,
      });
    }
  );
};

const deleteCustomer = (req, res) => {
  const customerId = req.params.id;
  db.query(
    "DELETE FROM customers WHERE CustomerID = ?",
    [customerId],
    (error, result) => {
      if (error) {
        console.log("Error deleting customer");
        return res.status(500).json({
          message: "Error deleting customer.",
          error: "Internal server error.",
        });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Customer not found",
        });
      } else {
        res.status(201).json({
          message: "Customer deleted.",
        });
      }
    }
  );
};

const getCustomerById = (req, res) => {
  const customerId = req.params.id;
  db.query(
    "SELECT * FROM customers WHERE CustomerID = ?",
    [customerId],
    (error, result) => {
      if (error) {
        console.log("Error selecting customer by id.!");
        return res.status(500).json({ error: "Internal server error.!" });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Customer not found",
        });
      }
      res.json(result);
    }
  );
};

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomer,
  updateCustomer,
};
