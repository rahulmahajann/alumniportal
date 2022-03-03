const adminAuth = require('../model/adminAuthModel');

const getAdminInfo = async(req, res) => {
    console.log(req.body);

    const adminUniqueId = req.body.adminUniqueId

    const adminDetails = await adminAuth.findOne({
        _id: adminUniqueId
    })

    res.json({
        adminName: adminDetails.adminName,
        adminEmail: adminDetails.adminEmail
    })

    // console.log(adminDetails);

}

module.exports = {getAdminInfo};