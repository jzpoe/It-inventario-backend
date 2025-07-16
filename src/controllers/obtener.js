import { Inventario } from "../db/model.js"



export const obtener = async (req, res) => {
    
    try {
        const inventario = await Inventario.find({estado: "inventario"});
        res.json(inventario); 

    } catch (error) {
        console.error("Error al obtener el inventario:", error)
        res.status(500).json({ error: "Error al obtener el inventario" })
    }
}