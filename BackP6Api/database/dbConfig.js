const mongoose = require('mongoose');

mongoose

.connect(
    "mongodb+srv://FabioP6:azersazers33@cluster0.hgwwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/",
    { useNewUrlParser: true, useUnifiedTopology: true },    
)
.then(() => console.log("Connxion à MongoDB Réussie"))
.catch(() => console.log("Échec de connexion à MongoDB"));