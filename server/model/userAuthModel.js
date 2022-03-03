const mongoose = require('mongoose');

const userAuthSchema = mongoose.Schema({
        userEmail:{
            type:String,
            required:true,
            unique:true,
        },

        password:{
            type:String,
            reqruied:true,
        },

        isApproved:{
            type:Boolean,
            default:false,
        },

    },

    {
        timestamps:true
    },
)

const userAuth = mongoose.model('userAuthTable', userAuthSchema);
module.exports = userAuth;

