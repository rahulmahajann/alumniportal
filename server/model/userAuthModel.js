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
            required: true,
        },

        isApproved:{
            type:Boolean,
            default:false,
        },
        
        isAdmin: {
            type: Boolean,
            default: false,
        },

        userPassword: {
            type: String,
        },

        platform: {
            type: String,
            default: null
        }


    },

    {
        timestamps:true
    },
)

const userAuth = mongoose.model('userAuthTable', userAuthSchema);
module.exports = userAuth;

