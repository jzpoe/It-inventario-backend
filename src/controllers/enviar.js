import { Inventario } from "../db/model.js"



export const enviarDatos = async (req, res) => {
 
    try {
        const enviarData = Inventario(req.body);
        await enviarData.save();
        res.status(201).json({ message: "Datos enviados correctamente" });

    } catch (error) {
        console.error("Error al enviar los datos:", error);
        res.status(500).json({ error: "Error al enviar los datos" });
    }

}