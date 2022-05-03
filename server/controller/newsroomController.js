const newsItem = require('../model/newsroom');

const addNewsItem = async(req,res) => {
    const {title,img,content} = req.body.newsItem;
    if(!title||!img||!content){
        res.json("Data not Complete");
        return false;
    }

    const newNewsItem = new newsItem({
        title,
        duplicateTitle: title.toLowerCase(),
        img,
        content,
    })

    newNewsItem.save()
        .then(() => {
            res.json("News item created")
        }).catch((err) => {
            res.json(err)
        });
}

const getNewsItems = async(req,res) =>{

    const {pagenumber}=req.headers;
    console.log("🚀 ~ file: newsroomController.js ~ line 27 ~ getNewsItems ~ pagenumber", typeof pagenumber)
    // console.log(pagenumber);
    const totalNewsItem = await newsItem.find();
    const totalNewsCount = totalNewsItem.length;
    const newsItems = await newsItem.find().sort({createdAt: -1}).skip(parseInt(pagenumber)*5).limit(5);

    if(!newsItems){
        return res.json("An error occured while getting data"); 
    }

    // console.log(newsItems)
    const resultObj = {
        totalNewsCount: totalNewsCount,
        data: newsItems,
        remainingNewsCount: totalNewsCount - ((parseInt(pagenumber) + 1) * 5) 
    }
    
    return res.send(resultObj);
}

const getNewsById = async (req, res) => {
    const {id} = req.body;

    const newsDetail = await newsItem.findOne({
        _id: id
    })

    return res.json(newsDetail)
}

const newsSearchByName = async (req, res) => {
    let { newsTitle, pageNumber } = req.body;
    console.log(req.body);
    newsTitle = newsTitle.toLowerCase();
    const newsDataCount = await newsItem.find({duplicateTitle: {$regex: newsTitle}});
    const totalNewsCount = newsDataCount.length;

    const newsData = await newsItem.find({duplicateTitle: {$regex: newsTitle}}).sort({createdAt: -1}).skip(parseInt(pageNumber)*5).limit(5);
    const resultObj = {
        totalNewsCount: totalNewsCount,
        data: newsData,
        remainingNewsCount: totalNewsCount - ((parseInt(pageNumber) + 1) * 5) 
    }
    console.log("🚀 ~ file: newsroomController.js ~ line 68 ~ newsSearchByName ~ totalNewsCount - ((parseInt(pageNumber) + 1) * 5)", totalNewsCount - ((parseInt(pageNumber) + 1) * 5))

    return res.send(resultObj);
}

module.exports = {addNewsItem, getNewsItems, getNewsById, newsSearchByName};