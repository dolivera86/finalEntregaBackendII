import { Router } from 'express';
import * as controller from '../controllers/auth.controller.js';

import { authenticate } from '../middleware/auth.js';
import UserDTO from '../dto/User.dto.js';

const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/forgot-password', controller.forgotPassword);
router.post('/reset-password', controller.resetPassword);
router.get('/current', authenticate, (req, res) => {
  const dto = new UserDTO(req.user);
  res.json(dto);
});

export default router;