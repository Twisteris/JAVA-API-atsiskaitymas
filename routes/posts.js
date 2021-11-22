const express = require("express");
const router = express.Router();

const { createController, updateController, getAllController, postSearchController } = require("../controllers/posts");

router.get("/posts", getAllController);
router.post("/create", createController);
router.patch("/update", updateController);
router.get("/getSearch/:input/", postSearchController);

module.exports = router;
