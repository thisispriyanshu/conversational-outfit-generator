const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const outfitRoute = require("./routes/outfit");
const productsRoute = require("./routes/productsRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/outfit", outfitRoute);
app.use("/products", productsRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
