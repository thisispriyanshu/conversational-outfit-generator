const router = require("express").Router();
const productsController = require("../controllers/productsController");

router.get("/getLink", productsController.getProducts);

module.exports = router;