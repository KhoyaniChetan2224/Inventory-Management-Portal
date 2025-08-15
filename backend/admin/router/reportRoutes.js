// routes/reporting.routes.js
const express = require("express");
const router = express.Router();
const { createReport, getReports } = require("../controllers/reportController");

// Constant API key
const API_KEY = "mysecretapikey";

// Middleware to attach API key info but NOT block request
function attachApiKey(req, res, next) {
  const key = req.headers["x-api-key"];
  req.apiKeyValid = key && key === API_KEY;
  next();
}

// Routes (no blocking even if key is wrong/missing)
router.post("/", attachApiKey, createReport);
router.get("/", attachApiKey, getReports);

module.exports = router;
