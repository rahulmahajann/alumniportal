const mongoose = require('mongoose');

const URL = 'mongodb+srv://adgitmalumni:adgitm123@cluster0.h0073.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const databaseConnection = async () => {
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongoS connection running!');
    }catch(err){
        console.log('mongoS connection error!', err)
    }
}

module.exports = databaseConnection;