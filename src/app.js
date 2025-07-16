import express, { json } from 'express'; 
import cors from 'cors';
import { config } from 'dotenv';
import inventarioRouter from './routes/controller.js';
import { dbConnect } from './db/mongo.js';

config();

const app = express();

app.use(cors());
const allowedOrigins = [
  'https://it-inventario.vercel.app', // Tu frontend en producción
  'http://localhost:3000'             // Opcional para desarrollo local
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir peticiones sin origin (como en Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
// Conexión a la base de datos
dbConnect()

const PORT = process.env.PORT ;

app.use(inventarioRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; 
