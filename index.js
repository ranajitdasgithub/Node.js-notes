const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4000;

const API_BASE_URL = "http://stageapi.monkcommerce.app/task/products/search";
const API_KEY = "72njgfa948d9aS7gs5";

// Use CORS middleware
app.use(cors());

app.get("/api/products", async (req, res) => {
  const { search = "Hat", page = 1, limit = 10 } = req.query;

  try {
    const response = await axios.get(API_BASE_URL, {
      params: { search, page, limit },
      headers: { "x-api-key": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
