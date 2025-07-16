import mongoose from "mongoose";
import { Inventario } from "../db/model.js";

export const retiro = async (req, res) => {
        console.log("🚀 Entró al endpoint /retiro/:id");

    try {
        const cambioInventario = req.params.id;

        console.log("ID recibido:", cambioInventario);

        if (!mongoose.Types.ObjectId.isValid(cambioInventario)) {
            return res.status(400).json({ error: "ID no válido" });
        }

        const resultado = await Inventario.updateOne(
            { _id: new mongoose.Types.ObjectId(cambioInventario) },
            { $set: { estado: "retirado" } }
        );
           
        console.log("Resultado updateOne:", resultado);

        if (resultado.modifiedCount === 0) {
            return res.status(404).json({ mensaje: "No se encontró o no se modificó ningún documento." });
        }

        res.json({ mensaje: "Equipo marcado como retirado" });

    } catch (error) {
        console.error("Error al marcar el equipo como retirado:", error);
        res.status(500).json({ error: "Error al marcar el equipo como retirado" });
    }
}


export const listRetiro = async (req, res) => {
    try {
        const itemRetiros = await Inventario.find({ estado: "retirado" });
        console.log("Items retirados:", itemRetiros);

        res.json(itemRetiros);  // ✅ ESTA LÍNEA FALTABA

    } catch (error) {
        console.error("Error al obtener los equipos retirados:", error);
        res.status(500).json({ error: "Error al obtener los equipos retirados" });
    }
};