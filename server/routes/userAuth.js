const express = require('express');
const { register, login, newRegisterEmail } = require('../controller/userAuth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/newuser', newRegisterEmail);

module.exports = router;