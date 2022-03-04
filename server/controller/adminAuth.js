const adminAuth = require('../model/adminAuthModel');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    
    console.log(req.body);

    const adminName = req.body.adminName;
    const adminEmail = req.body.adminEmail;
    const adminPassword = req.body.adminPassword;
    const adminId = req.body.adminId;

    console.log(adminName);

    if(!adminName || !adminEmail || !adminPassword || !adminId){
        return res.json("Data not complete");
    }
    
    const isAdminEmailExist = await adminAuth.findOne({adminEmail});
    const isAdminIdExist = await adminAuth.findOne({adminId});

    if(isAdminEmailExist){
        return res.json("Admin already exists for this email");
    }else if(isAdminIdExist){
        return res.json('Admin already exists for this id.')
    }else{

        const encryptedPassword = await bcrypt.hash(adminPassword, 16);

        const newAdminAuth = new adminAuth({
            adminName,
            adminEmail,
            adminPassword: encryptedPassword,
            adminId
        })
    
        newAdminAuth.save()
            .then(() => {
                res.json('user created')
            })
            .catch((err) => {
                res.json('error occured', err)
            })
    
    }
}

const login = async (req, res) => {

    console.log(req.body);

    const adminEmail = req.body.adminEmail;
    const adminPassword = req.body.adminPassword;

    if(!adminEmail || !adminPassword){
        return res.json("Data not complete");
    }

    const isAdminEmailExist = await adminAuth.findOne({
        adminEmail
    });

    if(isAdminEmailExist){
        
        const isValidPassword = await bcrypt.compare(adminPassword, isAdminEmailExist.adminPassword);

        if(isValidPassword){
            return res.json({
                message: 'successfully logged in!',
                adminUniqueId: isAdminEmailExist._id,
                isAdmin: isAdminEmailExist.isAdmin
            })
        }else{
            return res.json({message: 'username or password is not valid'})
        }

    }else{
        return res.json({message: 'username or password is not valid'})
    }

}

module.exports = { register, login };