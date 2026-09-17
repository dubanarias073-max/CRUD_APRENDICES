const jwtoken = require ("jsonwebtoken")
const ingresar =(usuario,clave)=>{
    //validar ususario
      // simular bd
  const usuariobd = {
    "usuario": "Alejandro",
    "clave": "abc123"
  };
     // validar datos del usuario
  if (usuario !== usuariobd.usuario || clave !== usuariobd.clave) {
    return res.status(401).json({ mensaje: "usuario y/o clave incorrecta." });
  }
  
  // crear token (Corregido: usamos 'jwt' que es tu variable de la línea 1)
  const token = jwtoken.sign(
    { user: usuario },
    process.env.JWT_SECRET || "secreto_temporal",
    { expiresIn: "1h" }
  );
  
  // respondemos con el token
  return token

}

module.exports = ingresar