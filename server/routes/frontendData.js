const express = require('express');
const {addNewsItem, getNewsItems, getNewsById} = require('../controller/newsroomController');

const router = express.Router();

router.post('/addNews', addNewsItem);
router.get('/getNews',getNewsItems);
router.post('/getNewsById', getNewsById);

module.exports = router;