require('dotenv').config();
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
