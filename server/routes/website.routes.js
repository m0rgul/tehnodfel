import {Router} from 'express';
import WebsiteController from '../controllers/website.controller';
const router = new Router();

router.get('/', (req, res) => {
  return WebsiteController.getWebsite(req, res);
});

router.post('/', (req, res) => {
  return WebsiteController.addWebsite(req, res);
});

router.put('/', (req, res) => {
  return WebsiteController.updateWebsite(req, res);
});

router.post('/contact', (req, res) => {
  return WebsiteController.contact(req, res);
});

export default router;
