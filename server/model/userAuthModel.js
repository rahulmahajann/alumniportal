const mongoose = require('mongoose');

const userAuthSchema = mongoose.Schema({
        userSalutation:{
            type: String,
            required: true
        },

        userEmail:{
            type:String,
            required:true,
            unique:true,
        },

        userPassword:{
            type:String,
            reqruied:true,
        },

        userName:{
            type: String,
            reqruied: true,
        },

        userGender:{
            type: String,
            required: true,
        },

        userDOB:{
            type: String,
            required: true
        },

        userMobile: {
            type: Number,
            required: true
        },

        userCity: {
            type: String,
            reqruied: true
        },

        userEnrollmentNumber: {
            type: Number,
            unique: true,
            required: true
        },

        userBatch: {
            type: String,
            required: true,
        },

        userCourseAndBranch: {
            type: String,
            required: true,
        },

        userImage: {
            type: String,
            reqruied: true
        },

        isApproved:{
            type:Boolean,
            default:false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }

    },

    {
        timestamps:true
    },
)

const userAuth = mongoose.model('userAuthTable', userAuthSchema);
module.exports = userAuth;

