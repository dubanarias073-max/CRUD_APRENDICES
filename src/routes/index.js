//consolida las rutas
const { Router } = require("express"); 
//importar enrutadores de las entidades
const pruebaRouter =require("./pruebaRouter")
const enrutador = Router()
const autenticaRouter = require("./autenticarRouter")
const usuariosRouter = require("./usuariosRouter")
// usar enrutador
enrutador.use("/rutaPrueba", pruebaRouter);
enrutador.use("/autenticar", autenticaRouter)
enrutador.use("/listado" , usuariosRouter)

module.exports = enrutador;
