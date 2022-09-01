//punto principal, instancia principal de express
import express from 'express';
//import authRoutes from './routes/authRoutes.js'
//import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

//manejar todas las rutas
const api = express();

api.use(express.json());
//llamo a mis rutas
api.use(productRoutes);

api.get('/status', (_,res) => {
    return res.json({
        msg: 'API en linea y funcionando'
    })
    
})

export default api;
