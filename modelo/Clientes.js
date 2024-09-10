const mongoose= require('mongoose');

const clientesSchema = mongoose.Schema({
    nombres:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    documento:{
        type:Number,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
},{versionKey:false});

const Cliente = mongoose.model('Cliente', clientesSchema); // Usa singular para el nombre del modelo
module.exports = Cliente;