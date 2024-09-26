const axios = require("axios");
const pino = require("pino")();
const app = require("express")();
const cron = require("node-cron");
require('dotenv').config();

cron.schedule("*/2 * * * *", async () => {
  try {
   const response = await axios.get(process.env.URL);
    pino.info(response.data);
  } catch (error) {
    pino.error(error);
  }
});

app.listen(3000, () => {
  pino.info("Running!");
});
