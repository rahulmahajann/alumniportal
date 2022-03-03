const express = require('express');
const { register, login } = require('../controller/adminAuth');

const router = express.Router();

router.post('/adminregister', register);
router.post('/adminlogin', login);

module.exports = router;