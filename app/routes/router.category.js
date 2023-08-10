const router = require('express').Router();
const categoryController = require('../controllers/controller.category');

router.get('/category', categoryController.index);
router.get('/category/create', categoryController.create);
router.post('/category',categoryController.store);
router.get('/category/delete/:id', categoryController.destroy);

module.exports = router;