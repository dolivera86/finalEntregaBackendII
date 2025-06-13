import { Router } from 'express';
import * as controller from '../controllers/product.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Ver productos: público
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// Crear, actualizar, eliminar: solo admin
router.post('/', authenticate, authorize('admin'), controller.create);
router.put('/:id', authenticate, authorize('admin'), controller.update);
router.delete('/:id', authenticate, authorize('admin'), controller.remove);

export default router;