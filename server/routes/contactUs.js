const express = require('express');
const { getContactUsFormData, saveContactUsFormData } = require('../controller/contactUs');

const router = express.Router();

router.get('/getContactUsData', getContactUsFormData);
router.post('/saveContactUsData', saveContactUsFormData)

module.exports = router;