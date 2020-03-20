const express = require('express');
const router = express.Router();
const todoRouter = require('./todo');
const userRouter = require('./user');

router.use('/api/todos', todoRouter);
router.use('/api', userRouter);

module.exports = router;