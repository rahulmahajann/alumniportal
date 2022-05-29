const jwt = require('jsonwebtoken');
const userAuth = require('../model/userAuthModel');

const validUserToken = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.send({
            status: false,
            message: 'Your session has expired. Please login again.'
        })
    }
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'Site by adgitm', async(err, payload) => {
        if(err) {
            return res.send({
                status: false,
                message: 'Your session has expired. Please login again.'
            })  
        }
        const {_id} = payload;
        const userInfo = await userAuth.findById(_id);
        req.user = userInfo;
        next();
    })
}

module.exports = {
    validUserToken
}