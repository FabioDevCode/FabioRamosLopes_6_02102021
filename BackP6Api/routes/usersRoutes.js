const express = require('express');
const passwordControl = require('../middleware/passwordControl');
const usersController = require('../controllers/usersControl');
const router = express.Router();


router.post("/signup", passwordControl, usersController.signup);
// router.post("/login", );












module.exports = router;