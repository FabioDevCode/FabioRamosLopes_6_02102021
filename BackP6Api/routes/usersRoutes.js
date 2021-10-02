const express = require('express');
const usersController = require('../controllers/usersControl');
const router = express.Router();


router.post("/signup", usersController.signup);













module.exports = router;