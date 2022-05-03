const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

    duplicateTitle: {
        type: String,
        required: true,
    },

    img:{
        type:String,
        required:false,
    },

    content:{
        type:String,
        required:true,
    }
},

{
    timestamps:true,
}

);

const newsItem=mongoose.model('NewsItem',newsSchema);

module.exports = newsItem;