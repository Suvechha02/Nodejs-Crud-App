const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const stdRoutes = require("./routes/studentsRoutes");
// configure dotenv
dotenv.config();

// rest part
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
// routes
app.use("/api/v1/student", stdRoutes);
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Crud App</h1>");
});

// port
const port = process.env.port || 4200;

// listen
app.listen(port, () => {
  console.log(`Server Running on port ${process.env.port}`.bgGreen.cyan);
});
