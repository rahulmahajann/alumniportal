const express = require('express');
const {addNewsItem, getNewsItems} = require('../controller/newsroomController');

const router = express.Router();

router.post('/addNews', addNewsItem);
router.get('/getNews',getNewsItems);

module.exports = router;