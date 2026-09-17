const jwt = require("jsonwebtoken");

//importar servicios
const ingresar = require("../service/autenticarService")
const iniciarSesion = async (req, res) => {
  const { usuario, clave } = req.body;
  const token =ingresar (usuario,clave)
  res.json({token})
  
    // try {  
    // } catch (error) {
    // }


};


module.exports = iniciarSesion