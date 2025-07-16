import mongoose from "mongoose";

const inventarioSchema = new mongoose.Schema({
  provedor: {
    type: String,
    required: false,
    trim: true,
  },
  serial: {
    type: String,
    required: false,
    trim: true,
  },
  activofijo: {
    type: String,
    required: false,
    trim: true,
  },
  activocargador: {
    type: String,
    required: false,
    trim: true,
  },
  personaasignada: {
    type: String,
    required: false,
    trim: true,
  },
  actadeentrega: {
    type: String,
    required: false,
    trim: true,
  },
  fechaasignacion: {
    type: Date,
    required: false,
  },
  ciudad: {
    type: String,
    required: false,
    trim: true,
  },
  marca: {
    type: String,
    required: false,
    trim: true,
  },
  modelo: {
    type: String,
    required: false,
    trim: true,
  },
  procesador: {
    type: String,
    required: false,
    trim: true,
  },
  memoria: {
    type: String,
    required: false,
    trim: true,
  },
  discoduro: {
    type: String,
    required: false,
    trim: true,
  },
  fechaIngreso: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: String,  }
});

// Exportación del modelo
export const Inventario = mongoose.model("Inventario", inventarioSchema);