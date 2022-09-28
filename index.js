require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});
// Import Routes
const usersRoutes = require("./routes/usersRoutes");

// Routes
app.use(usersRoutes);

const PORT = process.env.DB_PORT || 8089;

app.listen(PORT, () => {
  console.log(`API RODANADO NA PORTA ${PORT}`);
});
