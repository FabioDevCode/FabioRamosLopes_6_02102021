const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const virifyToken = jwt.verify(token, process.env.CLE_CRYPTO);
        const userId = virifyToken.userId;
        
        if (req.body.userId && req.body.userId !== userId) {
            throw 'ID invalide';
        } else {
            next();
        };

    } catch {
        res.status(401).json({
            error: new Error('Requète invalide')
        });
    }
};