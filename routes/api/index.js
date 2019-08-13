const express = require('express');
const router = express.Router();
const todoRoutes = require('./todo');
router.use('/todo', todoRoutes);
router.get('/', (req, res) => res.send('we are in /api/'));

module.exports = router;