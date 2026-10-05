// src/routes/pruebaRouter.js
const { Router } = require("express"); // ◄— Corregido: 'Router' con R mayúscula

const enrutador = Router();

// Corregido: El orden correcto siempre es (req, res)
enrutador.get("/usuarios", (req, res) => {
    res.json({ mensaje: "lista de usuarios" });
});

module.exports = enrutador;
