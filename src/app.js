const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");

require('dotenv').config();

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience:"http://localhost:3000/api/biblioteca" ,
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com",
  tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
// Importamos el Router de Usuarios
const usuariosRouter = require("./routes/usuarios");

// Configuramos el middleware de autenticacion para las rutas de libros
app.use("/api/libros", autenticacion, librosRouter);
// Configuramos el middleware de autenticacion para las rutas de usuarios
app.use("/api/usuarios", autenticacion, usuariosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;
