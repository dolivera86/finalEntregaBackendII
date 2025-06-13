import { Router } from 'express';
import * as viewController from '../controllers/view.controller.js';

const router = Router();

router.get('/', viewController.renderHome);
router.get('/login', viewController.renderLogin);
router.get('/reset-password/:token', viewController.renderReset);
router.get('/register', viewController.renderRegister);

export default router;

 

// import { Router } from 'express';
// import * as controller from '../controllers/view.controller.js';

// const router = Router();

// router.get('/', controller.renderHome);
// router.get('/login', controller.renderLogin);
// router.get('/reset-password/:token', controller.renderReset);

// export default router;