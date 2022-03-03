const mongoose = require('mongoose');

const adminAuthSchema = mongoose.Schema({
        adminEmail: {
            type: String,
            required: true,
            unique: true,
        },
        adminPassword: {
            type: String,
            required: true,
        },
        adminName: {
            type: String,
            required: true,
        },
        adminId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
    
)

const adminAuth = mongoose.model('adminAuthTable', adminAuthSchema);
module.exports = adminAuth;