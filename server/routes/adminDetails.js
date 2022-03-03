const express = require('express');
const { getAdminInfo } = require('../controller/adminDetails.js');

const router = express.Router();

router.post('/admininfo', getAdminInfo);

module.exports = router;