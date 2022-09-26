require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.DB_PORT || 8089;

app.use(express.json());

// Import Routes
const usersRoutes = require("./routes/usersRoutes");

// Routes
app.use(usersRoutes);

app.listen(PORT, () => {
  console.log(`API RODANADO NA PORTA ${PORT}`);
});
