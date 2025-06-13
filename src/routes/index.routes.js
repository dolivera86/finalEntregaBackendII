import { Router } from 'express';
import authRouter from './auth.routes.js';
import productRouter from './product.routes.js';
import cartRouter from './cart.routes.js';

const router = Router();

// Todas las rutas API quedan aquí:
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/carts', cartRouter);

export default router;