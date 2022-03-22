const newsItem = require('../model/newsroom');

const addNewsItem = async(req,res) => {

    // const title = req.body.title;
    // const img = req.body.img;
    // const content = req.body.content;

    const {title,img,content} = req.body;

    // console.log(title,img,content);

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


module.exports = {addNewsItem, getNewsItems};