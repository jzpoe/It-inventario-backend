 import dotenv from 'dotenv';

import mongoose from "mongoose";
dotenv.config();


export const MONGODB_UR = process.env.MONGODB_URI
                                
if (!MONGODB_UR) {
    console.log("DEBUG - URI cargada:", process.env.MONGODB_UR);
    throw new Error(
        "No hay variables disponibles para la conexión a la base de datos."
    )
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export async function dbConnect() {
    
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        console.log("Conectando a la base de datos...");
        console.log("URI de conexión:", MONGODB_UR);

        cached.promise = mongoose.connect(MONGODB_UR, {
            bufferCommands: false,
        }).catch(err => {
            console.error("Error al conectar a MongoDB:", err);
            throw err;
        });
    }
    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (err) {
        console.error("Fallo la conexión:", err);
        throw err;
    }
}