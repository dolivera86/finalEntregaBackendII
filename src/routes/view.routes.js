import { Router } from 'express';
import * as viewController from '../controllers/view.controller.js';

const router = Router();

router.get('/', viewController.renderHome);
router.get('/login', viewController.renderLogin);
router.get('/reset-password/:token', viewController.renderReset);
router.get('/register', viewController.renderRegister);

export default router;