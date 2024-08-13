const db = require("../config/db");

const getContracts = (req, res) => {
  db.query("SELECT * FROM contracts", (error, result) => {
    if (error) {
      console.log("Error selecting contracts.!");
      return res.status(500).json({ error: "Internal server error.!" });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "Contracts not found",
      });
    }
    res.json(result);
  });
};

const addContract = (req, res) => {
  const {
    CustomerID,
    ProductID,
    AdvancePercentage,
    InterestRate,
    TotalAmount,
    MonthlyPayment,
    CurStatus,
    ContractDate,
    Quantity,
  } = req.body;
  db.query(
    "INSERT INTO contracts ( CustomerID, ProductID, AdvancePercentage, InterestRate, TotalAmount, MonthlyPayment, CurStatus, ContractDate, Quantity ) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      CustomerID,
      ProductID,
      AdvancePercentage,
      InterestRate,
      TotalAmount,
      MonthlyPayment,
      CurStatus,
      ContractDate,
      Quantity,
    ],
    (error, result) => {
      if (error) {
        console.log("Error adding new contract");
        return res.status(500).json({
          message: "Error adding new contract.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "New contract added.",
        contractId: result.ContractID,
      });
    }
  );
};

const updateContract = (req, res) => {
  const contractId = req.params.id;
  const {
    CustomerID,
    ProductID,
    AdvancePercentage,
    InterestRate,
    TotalAmount,
    MonthlyPayment,
    CurStatus,
    ContractDate,
    Quantity,
  } = req.body;
  db.query(
    "UPDATE contracts SET CustomerID = ?, ProductID = ?, AdvancePercentage = ?, InterestRate = ?, TotalAmount = ?, MonthlyPayment = ?, CurStatus = ?, ContractDate = ?, Quantity = ?  \
    WHERE ContractID = ?",
    [
      CustomerID,
      ProductID,
      AdvancePercentage,
      InterestRate,
      TotalAmount,
      MonthlyPayment,
      CurStatus,
      ContractDate,
      Quantity,
      contractId,
    ],
    (error, result) => {
      if (error) {
        console.log("Error updating contract");
        return res.status(500).json({
          message: "Error updating contract.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "Customer updated.",
        customerId: contractId,
      });
    }
  );
};

const deleteContract = (req, res) => {
  const contractId = req.params.id;
  db.query(
    "DELETE FROM contracts WHERE ContractID = ?",
    [contractId],
    (error, result) => {
      if (error) {
        console.log("Error deleting contract");
        return res.status(500).json({
          message: "Error deleting contract.",
          error: "Internal server error.",
        });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Contract not found",
        });
      } else {
        res.status(201).json({
          message: "Contract deleted.",
        });
      }
    }
  );
};

const getContractById = (req, res) => {
  const contractId = req.params.id;
  db.query(
    "SELECT * FROM contracts WHERE ContractID = ?",
    [contractId],
    (error, result) => {
      if (error) {
        console.log("Error selecting contract by id.!");
        return res.status(500).json({ error: "Internal server error.!" });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Contract not found",
        });
      }
      res.json(result);
    }
  );
};

module.exports = {
  addContract,
  getContractById,
  getContracts,
  deleteContract,
  updateContract,
};
