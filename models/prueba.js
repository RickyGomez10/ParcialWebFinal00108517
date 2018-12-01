const mongoose = require('mongoose');

const Esquema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String

});

module.exports = mongoose.model('Prueba',Esquema);