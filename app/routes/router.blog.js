const router = require('express').Router();
const blogController = require('../controllers/controller.blog');

router.get('/blog', blogController.index); //blog list
router.get('/blog/create', blogController.create); // create blog form
router.post('/blog', blogController.store); //post blog

module.exports = router;