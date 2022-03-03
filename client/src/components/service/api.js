import axios from 'axios';

const URL = 'http://localhost:5000';

export const register = async (username) => {
    try{
        // console.log(username);
        const awazAii = await axios.post(`${URL}/register`, username);
        // console.log(awazAii.data);
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
        console.log(awazAii);
    }catch(err){
        console.log(err);
    }
}

export const adminRegister = async (adminDetails) => {
    try{
        // console.log(adminDetails);
        const awazAii = await axios.post(`${URL}/adminregister`, adminDetails);
        console.log(awazAii);
    }catch(err){
        console.log(err);
    }
}

export const adminLogin = async (adminDetails) => {
    try{
        // console.log(adminDetails);
        const awazAii = await axios.post(`${URL}/adminlogin`, adminDetails);
        // console.log(awazAii);
        return {
            information: awazAii.data
        }
    }catch(err){
        console.log(err);
    }
}

export const getAdminInfo = async (adminUniqueId) =>{
    try{
        // console.log(adminUniqueId);
        const awazAii = await axios.post(`${URL}/adminInfo`, { adminUniqueId });
        // console.log(awazAii);
        return awazAii.data;
        // return 
    }catch(err){
        console.log(err);
    }
}

