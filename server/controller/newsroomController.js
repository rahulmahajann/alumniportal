const newsItem = require('../model/newsroom');

const addNewsItem = async(req,res) => {
    const {title,img,content} = req.body;
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

    const newsItems = await newsItem.find();

    if(!newsItems){
        res.json("An error occured while getting data");
        return false;
    }

    // console.log(newsItems)
    res.json(newsItems);
    return true;
}

const getNewsById = async (req, res) => {
    const {id} = req.body;

    const newsDetail = await newsItem.findOne({
        _id: id
    })

    return res.json(newsDetail)
}

module.exports = {addNewsItem, getNewsItems, getNewsById};