//consolida las rutas
const { Router } = require("express"); 
//importar enrutadores de las entidades
const pruebaRouter =require("./pruebaRouter")
const enrutador = Router()
const autenticaRouter = require("./autenticarRouter")

// usar enrutador
enrutador.use("/rutaPrueba", pruebaRouter);
enrutador.use("/autenticar", autenticaRouter)

module.exports = enrutador;
