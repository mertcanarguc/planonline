const express = require('express');
const router = express.Router();
const mainController = require("../controllers/front/mainController")

router.get("/",mainController.index)
router.get("/contact",mainController.contact)
router.get("/about",mainController.about)

module.exports = router;
