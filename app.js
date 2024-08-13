const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mainRoute = require("./routes/");

const app = express();

app.use(express.json());
app.use("/api", mainRoute);

app.listen(PORT, () => {
  console.log(`Server working at http://localhost:${PORT}`);
});
