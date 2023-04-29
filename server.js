import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoute.js";
import cors from "cors";

// dotenv config
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>E-commerce Application</h1>");
});

// PORT
const PORT = process.env.PORT || 8081;

// port listen
app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.MODE_DEV} mode port ${PORT}`.bgCyan.white
  );
});
