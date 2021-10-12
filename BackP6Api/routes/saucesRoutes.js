const express = require('express');
const router = express.Router();
const multer = require('../database/multerConfig');
const auth = require('../middleware/authControl');
const saucesController = require('../controllers/saucesControl');




router.get("/", auth, multer, saucesController.getAllSauces);
router.get("/:id", auth, multer, saucesController.getSauce);
router.post("/", auth, multer, saucesController.createSauce);
router.put("/:id",    );
router.delete("/:id",    );
router.post("/:id/like",    );

module.exports = router;