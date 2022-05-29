const express = require('express');
const { register, login, newRegisterEmail, getPendingMembers, getApprovedMembers, updatePendingMember, deletePendingMember, uniqueMobile, uniqueRollNumber, validateEmailNPasswordForReset, updateResetPassword, sendOtp, updatePassword, getApprovedMemberByFilter, searchMember } = require('../controller/userAuth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/newuser', newRegisterEmail);
router.get('/pendingmembers', getPendingMembers);
router.get('/approvedmembers', getApprovedMembers);
router.post('/filteredapprovedmembers', getApprovedMemberByFilter);
router.put('/updatependingmember', updatePendingMember);
router.post('/deletependingmember', deletePendingMember);
router.post('/uniquemobile', uniqueMobile);
router.post('/uniquerollnumber', uniqueRollNumber);
router.post('/validateresetpassword', validateEmailNPasswordForReset);
router.post('/updateresetpassword', updateResetPassword);
router.post('/sendotp',sendOtp);
router.post('/updatepassword',updatePassword);
router.post('/filtermembers', searchMember);

module.exports = router;