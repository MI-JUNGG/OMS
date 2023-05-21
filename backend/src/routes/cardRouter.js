const express = require("express");
const router = express.Router();

const cardController = require("../controllers/cardController");

router.post("/", cardController.postCard);
router.put("/", cardController.patchCard);
router.delete("/", cardController.deleteCard);

module.exports = {
  router,
};
