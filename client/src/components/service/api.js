import axios from 'axios';

const URL = 'http://localhost:5000';

export const register = async (username) => {
    try{
        const awazAii = await axios.post(`${URL}/register`, username);
        console.log(awazAii.data);
        return {
            information: awazAii.data
        };
    }catch(err){
        console.log(err);
    }
}

export const newRegisterEmail = async (username) => {
    try{
        const awazAii = await axios.post(`${URL}/newuser`, username);
        return {
            information: awazAii.data
        }
    }catch(err){
        console.log(err);
    }
}

export const adminRegister = async (adminDetails) => {
    try{
        const awazAii = await axios.post(`${URL}/adminregister`, adminDetails);
        console.log(awazAii);
    }catch(err){
        console.log(err);
    }
}

export const adminLogin = async (adminDetails) => {
    try{
        const awazAii = await axios.post(`${URL}/adminlogin`, adminDetails);
        return {
            information: awazAii.data
        }
    }catch(err){
        console.log(err);
    }
}

export const getAdminInfo = async (adminUniqueId) =>{
    try{
        const awazAii = await axios.post(`${URL}/adminInfo`, { adminUniqueId });
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const getPendingMembers = async () => {
    try{
        console.log('backend pe awaz gayi');
        const awazAii = await axios.get(`${URL}/pendingmembers`);
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const getApprovedMembers = async () => {
    try{
        const awazAii = await axios.get(`${URL}/approvedmembers`);
        // console.log(awazAii.data);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const updatePendingMember = async (userId) => {
    try{
        const awazAii = await axios.put(`${URL}/updatependingmember`, {userId});
        console.log(awazAii);
    }catch(err){
        console.log(err);
    }
}

export const deletePendingMember = async (userId) => {
    try{
        // console.log(userId);
        const awazAii = await axios.post(`${URL}/deletependingmember`, {userId});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const uniqueMobile = async (userMobile) => {
    try{
        // console.log(userMobile);
        const awazAii = await axios.post(`${URL}/uniquemobile`, {userMobile});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const uniqueRollNumber = async (userEnrollmentNumber) => {
    try{
        const awazAii = await axios.post(`${URL}/uniquerollnumber`, {userEnrollmentNumber});
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const validateEmailNPasswordForReset = async (userLoginDetails) => {
    try{
        console.log('backend pe awaz gayi');
        const awazAii = await axios.post(`${URL}/validateresetpassword`, userLoginDetails);
        // console.log(awazAii);
        return awazAii.data;
    }catch(err){
        console.log(err);
    }
}

export const updateResetPassword = async (userNewPasswordDetails) => {
    try{
        console.log(userNewPasswordDetails);
        const awazAii = await axios.post(`${URL}/updateresetpassword`, userNewPasswordDetails);
        // console.log(awazAii);
        return awazAii.data
    }catch(err){
        console.log(err);
    }
}