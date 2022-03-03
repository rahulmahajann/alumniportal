const userAuth = require('../model/userAuthModel.js');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    
    console.log(req.body);

    const userSalutation = req.body.userSalutation;
    const userEmail = req.body.userEmail;
    const userName = req.body.userName;
    const userGender = req.body.userGender;
    const userDOB = req.body.userDOB;
    const userMobile = req.body.userMobile;
    const userCity = req.body.userCity;

    if(!userSalutation || !userEmail || !userName || !userGender || !userDOB || !userMobile || !userCity){
        return res.json('Data not complete');       
    }else{
        const newUserAuth = new userAuth({
            userSalutation,
            userEmail,
            userName,
            userGender,
            userDOB,
            userMobile,
            userCity
        })

        newUserAuth.save()
            .then(() => {
                res.json('userCreated')
            }).catch((err) => {
                res.json(err)
            })
    }


}

const newRegisterEmail = async (req,res) => {

    console.log(req.body);

    const userEmail = req.body.userEmail;

    console.log(userEmail);

    if(!userEmail){
        return res.json("Data not complete");
    }
    
    const isUsernameExist = await userAuth.findOne({userEmail});

    console.log(isUsernameExist);

    if(isUsernameExist){
        return res.json("User already exists for this email");
    }else{
        return res.json('Unique Email')
    }

    // const newUserAuth = new userAuth({
    //     userEmail,
    // });

    // newUserAuth.save()
    //     .then(()=>res.json("user created"))
    //     .catch((err)=>res.status(200).json("error occured",err));

}

const login = async (req, res) => {
    
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    if(!userEmail || !userPassword){
        return res.status(200).json('Data not complete');
    }

    const isUserEmailExist = await userAuth.findOne({userEmail});

    if(isUserEmailExist){
        
        const isValidPassword = await bcrypt.compare(userPassword, isUserEmailExist);

        if(isValidPassword){

        }else{

        }

    }else{

    }

}

const getPendingMembers = async (req, res) => {

    const allPendingMembers = await userAuth.find({isApproved: false});
    res.json(allPendingMembers);

}

const getApprovedMembers = async (req, res) => {

    const allApprovedMembers = await userAuth.find({isApproved: true});
    res.json(allApprovedMembers);

}

module.exports = { newRegisterEmail, login, register, getPendingMembers, getApprovedMembers };