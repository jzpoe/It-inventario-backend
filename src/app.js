import express, { json } from 'express'; 
import cors from 'cors';
import { config } from 'dotenv';
import inventarioRouter from './routes/controller.js';
import { dbConnect } from './db/mongo.js';

config();

const app = express();

app.use(cors());
app.use(json());
// Conexión a la base de datos
dbConnect()

const PORT = process.env.PORT ;

app.use(inventarioRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; 
