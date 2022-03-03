const userAuth = require('../model/userAuthModel.js');
const bcrypt = require('bcryptjs');

const newRegisterEmail = async (req,res) => {

    console.log(req.body);

    const userEmail = await req.body.userEmail;

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

module.exports = { newRegisterEmail, login };