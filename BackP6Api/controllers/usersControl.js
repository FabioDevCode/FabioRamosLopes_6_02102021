const usersModel = require('../models/usersModel');


exports.signup = (req, res, next) => {
    console.log(req.body);

    const user = new usersModel({
        email : req.body.email,
        password : req.body.password
    });

    user.save()
    .then(() => res.status(201).json({ message: "Nouvel utilisateur créé !"}))
    .catch(error => res.status(400).json({ error }));
};