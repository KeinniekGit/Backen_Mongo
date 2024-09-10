const mongoose = require("mongoose");
require("dotenv").config();

//funcion conexion base de datos
const conectarbd = () => {
    mongoose
    .connect(process.env.MongoDB)
    .then(()=> console.log("Estamos conectados desde MongoDB"))
    .catch((err) => console.log("err"))
}

module.exports = conectarbd