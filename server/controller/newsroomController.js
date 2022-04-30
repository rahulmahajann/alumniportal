const newsItem = require('../model/newsroom');

const addNewsItem = async(req,res) => {
    const {title,img,content} = req.body.newsItem;
    if(!title||!img||!content){
        res.json("Data not Complete");
        return false;
    }

    const newNewsItem = new newsItem({
        title,
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
        res.json("An error occured while getting data");
        return false;
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

module.exports = {addNewsItem, getNewsItems, getNewsById};