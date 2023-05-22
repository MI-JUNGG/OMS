const express = require("express");
const router = express.Router();
const { validateToken } = require("../utils/auth");

const cardController = require("../controllers/cardController");

router.post("/", validateToken, cardController.postCard);
router.put("/", cardController.patchCard);
router.delete("/", cardController.deleteCard);

module.exports = {
  router,
};
