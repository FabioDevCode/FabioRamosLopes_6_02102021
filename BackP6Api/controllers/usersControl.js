const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const cryptojs = require('crypto-js');
const dotenv = require('dotenv');
const result = dotenv.config();




exports.signup = (req, res, next) => {

    const emailCrypt = cryptojs.HmacSHA256(req.body.email, `${process.env.CLE_CRYPTO_EMAIL}`).toString();

    bcrypt.hash(req.body.password, 10)

    .then((hashedPassword)=> {

        const user = new usersModel({
            email : emailCrypt,
            password : hashedPassword
        });

        user.save()
        .then(() => res.status(201).json({ message : "Nouvel utilisateur créé !"}))
        .catch((error) => {
            console.log(error)
            res.status(400)
        });

    })

    .catch((error) => {
        console.log(error)
        res.status(500).json({ error })
    });

};