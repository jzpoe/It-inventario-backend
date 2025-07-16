import express from 'express';
import { obtener } from '../controllers/obtener.js';
import { enviarDatos } from '../controllers/enviar.js';
import { listRetiro, retiro } from '../controllers/retiro.js';
import { cambio, cambioGet } from '../controllers/cambio.js';



const router = express.Router();

router.get('/obtener', obtener);
router.post('/enviar', enviarDatos); 
router.put('/retiro/:id', retiro)
router.get('/inventario/retiro', listRetiro)
router.put('/inventario/cambio/:id', cambio);
router.get('/inventario/cambio', cambioGet);
// Exportar el router para usarlo en otros archivos
export default router;