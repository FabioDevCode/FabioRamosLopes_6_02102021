const Sauce = require('../models/saucesModel');
const fs = require('fs');


exports.createSauce = (req, res, next) => {

    const sauceData = JSON.parse(req.body.sauce)
    delete sauceData._id;
    const sauce = new Sauce({
        ...sauceData,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersdisLiked: [],
    });
    sauce.save()
    .then(() => res.status(201).json({ message: "Sauce créée et enregistrées" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllSauces = (req, res, next) => {
    Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(404).json({ error }));
};
  
exports.getSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
};