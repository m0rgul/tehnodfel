import express from 'express';

var router = express.Router();

router.get('/', (req, res) => {
  res.send('Website');
});

export default router;
