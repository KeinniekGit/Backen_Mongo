const Cliente=require('../modelo/Clientes');
exports.agregarClientes = async(req,res) => {
    try{
    let clientes;
    clientes= new Cliente(req.body)
    await clientes.save();
    res.json(clientes);
}
catch (error) {
console.log("error al agregar un cliente")
res.status(500).send("error al agregar un cliente");
}
}
//buscar clientes
exports.buscarClientes = async (req,res)=>{
    try{
        const clientes= await Cliente.find()
        res.json(clientes);
        }
    
    catch (error) {
        console.log("error al mostrar un cliente")
        res.status(500).send("error al mostrar un cliente");
        }
}
//buscar un cliente
exports.BuscarCliente = async (req,res) =>{
    try{
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"El cliente no se encuentra"});
        }else{
            res.json(clientes)
        }
    }catch(error){
        console.log("error al mostrar un cliente")
        res.status(500).send("error al mostrar un cliente");
    }
}
//funcion modificar clientes con el metodo put
exports.modificarClientes= async(req,res)=>{
    try{
        let clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true } );
        if(!clientes){
            res.status(404).send({msg:"El cliente no encontrado"});
        }else{
            res.json(clientes);
        }
    }catch(error){
        console.log("error al mostrar un cliente")
        res.status(500).send("error al mostrar un cliente");
    }   
}
//funcion editar utilizando patch
exports.editarClientes=async(req,res)=> {
    try{
        const clientes=await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg:"El cliente no existe"});
        }else{
            res.json(clientes);
        }
    }catch(error){
        console.log("error al mostrar un cliente")
        res.status(500).send("error al mostrar un cliente");
    }   
}

// Funcion para eliminar un productos.
exports.eliminarClientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const clienteEliminado = await Cliente.findByIdAndDelete(id); // Asegúrate de usar Cliente aquí

        if (!clienteEliminado) {
            return res.status(404).send("Cliente no encontrado");
        }

        res.json({ mensaje: "Cliente eliminado", cliente: clienteEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el Cliente");
    }
};