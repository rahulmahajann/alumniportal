const express = require('express');
const { register, login, newRegisterEmail, getPendingMembers, getApprovedMembers } = require('../controller/userAuth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/newuser', newRegisterEmail);
router.get('/pendingmembers', getPendingMembers);
router.get('/approvedmembers', getApprovedMembers);

module.exports = router;