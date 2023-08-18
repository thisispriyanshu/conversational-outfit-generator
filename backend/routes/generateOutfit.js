const router = require('express').Router();
const outfitController = require('../controllers/outfitController');
router.post('/generate_outfit', outfitController.generateOutfit);