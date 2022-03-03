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

