const router = require("express").Router();
const outfitController = require("../controllers/outfitController");

router.post("/generate_outfit", outfitController.generateOutfit);
// router.get("/similar_outfit", outfitController.getSimilarOutfit);
// router.put("/update_outfit", outfitController.updateOutfit);

module.exports = router;
