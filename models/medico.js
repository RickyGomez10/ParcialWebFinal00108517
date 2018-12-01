const mongoose = require('mongoose');

const medico = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Nombre: String,
    Especialidad: String,
    Anios: Number,


});
module.exports = mongoose.model('Medico', medico);