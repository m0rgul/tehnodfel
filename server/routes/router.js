import express from 'express';
import website from './website';
import users from './users.routes';

const router = express.Router();

router.use('/', website);
router.use('/users', users);

export default router;
