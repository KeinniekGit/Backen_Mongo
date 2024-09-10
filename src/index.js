const express = require("express");
const conectarbd= require("../configdb/db");
const cors = require("cors");
const clientesRutas = require("../routers/clientesrutas")

const app = express();

const puerto = process.env.PORT || 5000;

//llamamos conectarbd
conectarbd();
app.use(cors());
app.use(express.json());
//ruta desde la web
app.use("/api/clientes", clientesRutas);
app.get("/",(req, res)=> {res.send("Bienvenidos estamos desde el navegador");})
app.listen(puerto,() => console.log("Estamos conectados desde el servidor", puerto));
