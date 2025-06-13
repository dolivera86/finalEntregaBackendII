import { Router } from 'express';
import * as controller from '../controllers/cart.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Solo usuarios autenticados pueden usar carrito
router.get('/', authenticate, authorize('user'), controller.getCart);
router.post('/add', authenticate, authorize('user'), controller.addProduct);
router.post('/clear', authenticate, authorize('user'), controller.clearCart);

export default router;