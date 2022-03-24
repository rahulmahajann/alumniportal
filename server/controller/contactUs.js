const CONTACTUS = require('../model/contactUsModel');

const getContactUsFormData = async (req, res) => {
    const contactUsFormData = await CONTACTUS.find();

    return res.json({
        contactUsFormData
    })
}

const saveContactUsFormData = async (req, res) => {
    const{userName, userEmail, userPhoneNo, subject, message} = req.body;

    const saveContactUsData = new CONTACTUS({
        userName,
        userEmail,
        userPhoneNo,
        subject,
        message
    })

    saveContactUsData.save()
        .then(() => {
            return res.json({
                message: 'Your query sent successfully'
            })
        }).catch((err) => {
            return res.json({
                err
            })
        })

}

module.exports = {getContactUsFormData, saveContactUsFormData};