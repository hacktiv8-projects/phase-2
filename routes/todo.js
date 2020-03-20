const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);

router.get('/', TodoController.showAll);
router.get('/:id', authorization,TodoController.find);
router.post('/', TodoController.add);
router.delete('/:id', authorization,TodoController.delete);
router.put('/:id', authorization,TodoController.update);
router.patch('/:id/title', authorization,TodoController.updateTitle);
router.patch('/:id/description', authorization,TodoController.updateDescription);

module.exports = router;