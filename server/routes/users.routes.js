import {Router} from 'express';
import UserController from '../controllers/users.controller';
const router = new Router();

router.get('/', (req, res) => {
  return UserController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  return UserController.getById(req, res);
});

router.post('/', (req, res) => {
  return UserController.addUser(req, res);
});

router.put('/:id', (req, res) => {
  return UserController.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
  return UserController.removeUser(req, res);
});

export default router;
