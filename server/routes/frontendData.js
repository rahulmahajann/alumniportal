const express = require('express');
const {addNewsItem, getNewsItems, getNewsById, newsSearchByName} = require('../controller/newsroomController');

const router = express.Router();

router.post('/addNews', addNewsItem);
router.get('/getNews',getNewsItems);
router.post('/getNewsById', getNewsById);
router.post('/newsSearchByName', newsSearchByName);

module.exports = router;