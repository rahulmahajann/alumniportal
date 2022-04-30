const userAuth = require('../model/userAuthModel.js');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const register = async (req, res) => {
    
    console.log(req.body);

    const userSalutation = req.body.userSalutation;
    const userEmail = req.body.userEmail;
    const userName = req.body.userName;
    const userGender = req.body.userGender;
    const userDOB = req.body.userDOB;
    const userMobile = req.body.userMobile;
    const userCity = req.body.userCity;
    const userImage = req.body.userImage;
    const userBatch = req.body.userBatch;
    const userCourseAndBranch = req.body.userCourseAndBranch;
    const userEnrollmentNumber = req.body.userEnrollmentNumber;

    console.log(userImage, userBatch, userCourseAndBranch, userEnrollmentNumber);

    if(!userSalutation || !userEmail || !userName || !userGender || !userDOB || !userMobile || !userCity || !userImage || !userCourseAndBranch || !userBatch || !userEnrollmentNumber){
        return res.json('Data not complete');       
    }else{
        const newUserAuth = new userAuth({
            userSalutation,
            userEmail,
            userName,
            userGender,
            userDOB,
            userMobile,
            userCity,
            userImage,
            userEnrollmentNumber,
            userBatch,
            userCourseAndBranch
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
}

const uniqueMobile = async (req, res) => {

    console.log(req.body);

    const userMobile = req.body.userMobile;


    const isUserMobile = await userAuth.find({userMobile});

    console.log('isUserMobile', isUserMobile);

    if(isUserMobile.length != 0){
        console.log('dup');
        return res.json('duplicate mobile number');
    }else{
        return res.json('unique mobile number');
    }
    
}

const uniqueRollNumber = async (req, res) => {
    const userEnrollmentNumber = req.body.userEnrollmentNumber;

    const isUserRollNumber = await userAuth.find({userEnrollmentNumber});

    if(isUserRollNumber.length != 0){
        return res.json('duplicate enrollment number');
    }else{
        return res.json('unique enrollment number');
    }

}

const login = async (req, res) => {
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    console.log(userEmail, userPassword);
    if(!userEmail || !userPassword){
        return res.status(200).json('Data not complete');
    }

    const isUserEmailExist = await userAuth.findOne({
        userEmail
    });

    if(isUserEmailExist){
        const isValidPassword = await bcrypt.compare(userPassword, isUserEmailExist.userPassword);
        if(isValidPassword){
            return res.json({
                message: 'successfully logged in!',
                userUniqueId: isUserEmailExist._id,
            })
        }else{
            return res.json({
                message: 'username or password is not valid'
            })
        }

    }else{
        return res.json({
            message: 'username or password is not valid'
        })
    }

}

const getPendingMembers = async (req, res) => {

    const allPendingMembers = await userAuth.find({isApproved: false});
    return res.json(allPendingMembers);

}

const getApprovedMembers = async (req, res) => {

    const allApprovedMembers = await userAuth.find({isApproved: true}).sort({createdAt: -1});
    return res.json(allApprovedMembers);

}

const updatePendingMember = async (req, res) => {
    const userId = req.body.userId;

    // console.log(userId);

    const userInfo = await userAuth.find({_id: userId});

    await userAuth.findByIdAndUpdate(userId, {
        isApproved: true
    })

    // console.log(userInfo)

    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    let temporaryPassword = ''

    for(var i = 0; i < 8; i++){
        temporaryPassword += alphabets[Math.floor(Math.random()*26)];
    }

    const encryptedPassword = await bcrypt.hash(temporaryPassword, 16);

    await userAuth.findByIdAndUpdate(userId, {
        userPassword: encryptedPassword
    })

    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alumniadgitm@gmail.com',
            pass: 'kiazrbylovqfzori'
        }
    })

    // console.log(userInfo);

    const mailOptions = {
        from: 'alumniadgitm@gmail.com',
        to: userInfo[0].userEmail,
        subject: 'Congratulation Registered Successfully',
        text: `hey you are registered succesfully on alumni portal of ADGITM. This is your temporaryPassword ${temporaryPassword} please change it from the login screen.`
    }

    transpoter.sendMail(mailOptions);

    return res.json('user Approved');
}

const deletePendingMember = async (req, res) => {
    console.log(req.body);
    const userId = req.body.userId;
    await userAuth.findByIdAndDelete(userId);
    return res.json('user removed successfully');

}

const validateEmailNPasswordForReset = async (req, res) => {
    
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    if(!userEmail || !userPassword){
        return res.json('complete the fields')
    }

    const isUserEmail = await userAuth.findOne({userEmail});

    if(isUserEmail){

        const isValidPassword = await bcrypt.compare(userPassword, isUserEmail.userPassword);

        if(isValidPassword){
            return res.json('Validate')
        }else{
            return res.json('Either email or password is incorrect');
        }       

    }else{
        return res.json('Either email or password is incorrect');
    }

    // console.log(isUserEmail);

}

const updateResetPassword = async (req, res) => {

    // console.log(req.body);
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const userInformation = await userAuth.findOne({userEmail});

    console.log(userInformation);

    const encryptedPassword = await bcrypt.hash(userPassword, 16);

    await userAuth.findByIdAndUpdate(userInformation, {
        userPassword: encryptedPassword
    })

    return res.json('password changed succesfully');

}

const sendOtp = async (req,res) => {
    
    const userEmail = req.body.userEmail;
    const userFound = await  userAuth.findOne({userEmail});
    
    
    if(userFound){
        //sendOtp

        const digits = '0123456789';

        let tempOtp = '';

        for( var i = 0; i < 6; i++){
            tempOtp += digits[Math.floor(Math.random()*10)];
        }

        const otp = await bcrypt.hash(tempOtp, 16);

        const transpoter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'alumniadgitm@gmail.com',
                pass: 'kiazrbylovqfzori'
            }
        })

        const mailOptions = {
            from: 'alumniadgitm@gmail.com',
            to: userFound.userEmail,
            subject: 'Your One Time Password For Change of Password',
            text: `Don't share the OTP: ${tempOtp} with anyone`
        }

        transpoter.sendMail(mailOptions);

        return res.status(200).json({
            message: 'mail sent successfully',
            otp
        });
    }
    else{
         return res.status(200).json("User not Found");
    }

}

const updatePassword = async(req,res) => {
    const userPassword = await req.body.userPassword;
    const userEmail = await req.body.userEmail;
    const hashedPassword= await bcrypt.hash(userPassword,16);
    const passwordChanged = await userAuth.findOneAndUpdate({userEmail:userEmail},{userPassword:hashedPassword});

    console.log(passwordChanged);
    return res.status(200).json(passwordChanged);
}
module.exports = { updateResetPassword, validateEmailNPasswordForReset, newRegisterEmail, uniqueMobile , login, register, getPendingMembers, getApprovedMembers, updatePendingMember, deletePendingMember, uniqueRollNumber, sendOtp, updatePassword };