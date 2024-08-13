const db = require("../config/db");

const getPayments = (req, res) => {
  db.query("SELECT * FROM creditpayments", (error, result) => {
    if (error) {
      console.log("Error selecting Credit Payments.!");
      return res.status(500).json({ error: "Internal server error.!" });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "Credit Payments not found",
      });
    }
    res.json(result);
  });
};

const addPayment = (req, res) => {
  const {
    ContractID,
    PaymentDate,
    AmountPaid,
    BalanceRemaining,
    PaymentMethod,
    MonthLeft,
  } = req.body;
  db.query(
    "INSERT INTO creditpayments ( ContractID, PaymentDate, AmountPaid, BalanceRemaining, PaymentMethod, MonthLeft ) \
    VALUES (?, ?, ?, ?, ?, ?)",
    [
      ContractID,
      PaymentDate,
      AmountPaid,
      BalanceRemaining,
      PaymentMethod,
      MonthLeft,
    ],
    (error, result) => {
      if (error) {
        console.log("Error adding new payment.");
        return res.status(500).json({
          message: "Error adding new payment.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "New payment added.",
        paymentId: result.insertId,
      });
    }
  );
};

const updatePayment = (req, res) => {
  const paymentId = req.params.id;
  const {
    ContractID,
    PaymentDate,
    AmountPaid,
    BalanceRemaining,
    PaymentMethod,
    MonthLeft,
  } = req.body;
  db.query(
    "UPDATE creditpayments SET ContractID = ?, PaymentDate = ?, AmountPaid = ?, BalanceRemaining = ?, PaymentMethod = ?, MonthLeft = ?  \
    WHERE PaymentID = ?",
    [
      ContractID,
      PaymentDate,
      AmountPaid,
      BalanceRemaining,
      PaymentMethod,
      MonthLeft,
      paymentId,
    ],
    (error, result) => {
      if (error) {
        console.log("Error updating payment");
        return res.status(500).json({
          message: "Error updating payment.",
          error: "Internal server error.",
        });
      }
      res.status(201).json({
        message: "Payment updated.",
        paymentID: paymentId,
      });
    }
  );
};

const deletePayment = (req, res) => {
  const paymentId = req.params.id;
  db.query(
    "DELETE FROM creditpayments WHERE PaymentID = ?",
    [paymentId],
    (error, result) => {
      if (error) {
        console.log("Error deleting payment.");
        return res.status(500).json({
          message: "Error deleting payment.",
          error: "Internal server error.",
        });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Payment not found",
        });
      } else {
        res.status(201).json({
          message: "Payment deleted.",
        });
      }
    }
  );
};

const getPaymentById = (req, res) => {
  const paymentId = req.params.id;
  db.query(
    "SELECT * FROM creditpayments WHERE PaymentID = ?",
    [paymentId],
    (error, result) => {
      if (error) {
        console.log("Error selecting payment by id.!");
        return res.status(500).json({ error: "Internal server error.!" });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "Payment not found",
        });
      }
      res.json(result);
    }
  );
};

module.exports = {
  getPayments,
  getPaymentById,
  addPayment,
  deletePayment,
  updatePayment,
};
