// src/routes/pruebaRouter.js
const { Router } = require("express"); // ◄— Corregido: 'Router' con R mayúscula

const enrutador = Router();

// Corregido: El orden correcto siempre es (req, res)
enrutador.get("/3407184", (req, res) => {
    res.json({ mensaje: "ruta de prueba 3407184" });
});

module.exports = enrutador;
