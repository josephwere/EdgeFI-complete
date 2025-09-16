import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "EdgeFi backend running locally ✅" });
});

app.listen(PORT, () => {
  console.log(`EdgeFi backend running at http://localhost:${PORT}`);
});