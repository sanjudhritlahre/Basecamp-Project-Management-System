import express from "express";
import cors from "cors";
import healthCheckRouter from "./routes/healthcheck.routes.js";

const app = express();

// Basic Configuration of Express
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }),
);

app.use('/api/v1/healthcheck', healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Basecampy : Project Management Platform!");
});

export default app;
