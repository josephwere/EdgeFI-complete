import express from "express";
const router = express.Router();

const packages = [
  { id: 1, name: "Hourly", duration: "2 hrs", price: 10 },
  { id: 2, name: "Daily", duration: "1 Day", price: 60 },
  { id: 3, name: "Monthly", duration: "30 Days", price: 700 }
];

router.get("/", (req, res) => {
  res.json(packages);
});

export default router;