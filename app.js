const { error } = require('console');
const express = require('express');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 3000;

// Importar validaciones
const { validarCampos } = require('./validacion/validar');

//body-parse
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//endpoint json
app.post("/datosjson", (req,res)=>{
  const datosRecibidos =req.body
  //validamos  si los datos son recibidos
  if(datosRecibidos){
    res.json({mensaje:"datos recibidos correctamente"})
  }
   res.status(500).json({mensaje:"No se recibieron datos"});
})

app.post("/formulario",(req,res)=>{
  const datos = req.body
  res.json({datos:datos})
})

//mode de escucha del servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});