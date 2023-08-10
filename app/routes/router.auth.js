const router = require('express').Router();

const authController = require('../controllers/controller.auth');


router.get('/register', authController.register);
router.post('/register', authController.store);

router.post('/get-code', authController.generateVerificationCode)

module.exports = router;