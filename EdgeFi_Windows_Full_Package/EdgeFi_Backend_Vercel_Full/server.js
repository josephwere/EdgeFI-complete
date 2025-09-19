import express from "express";
import cors from "cors";
import packagesRouter from "./api/packages.js";
import usersRouter from "./api/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "EdgeFi backend running ✅" });
});

// API routes
app.use("/api/packages", packagesRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`EdgeFi backend running at http://localhost:${PORT}`);
});