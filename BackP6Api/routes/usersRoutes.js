const express = require('express');
const passwordControl = require('../middleware/passwordControl');
const usersController = require('../controllers/usersControl');
const router = express.Router();


router.post("/signup", passwordControl, usersController.signup);













module.exports = router;