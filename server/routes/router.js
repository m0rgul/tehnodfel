import express from 'express';
import website from './website';
import users from './users.routes';
import cms from './website.routes';

const router = express.Router();

router.use('/', website);
router.use('/api/users', users);
router.use('/api/website', cms)

export default router;
