import mongoose from "mongoose";
import { Inventario } from "../db/model.js";

export const cambio = async (req, res) => {
    try {
        const idCambio = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(idCambio)) {
            return res.status(400).json({ error: "ID no válido" });
        }

        const resultado = await Inventario.updateOne(
            { _id: new mongoose.Types.ObjectId(idCambio) },
            { $set: { estado: "cambio" } }
        );

        if (resultado.modifiedCount === 0) {
            return res.status(404).json({ mensaje: "No se encontró o no se modificó ningún documento." });
        }

        res.json({ mensaje: "Equipo marcado como en cambio" });

    } catch (error) {
        console.error("Error al marcar el equipo como en cambio:", error);
        res.status(500).json({ error: "Error al marcar el equipo como en cambio" });
    }
};


export const cambioGet = async (req, res) => {

    try {
        const itemCambio = await Inventario.find({ estado: "cambio" });
            console.log("Items retirados:", itemCambio);
        res.json(itemCambio);  // ✅ ESTA LÍNEA FALTABA
    } catch (error) {
        console.error("Error al obtener los equipos en cambio:", error);
        res.status(500).json({ error: "Error al obtener los equipos en cambio" });
    }
    
}