require("dotenv").config()
const express = require("express")
//importar enrutador
const enrutador =require("./routes")
const app= express()

//middleware formatear datos del body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rutas por defecto
app.use("/api",enrutador)// por crear enrutador en la carpeta route

app.get("/",(req,res)=>{
    res.send("API rest")
})

module.exports= app