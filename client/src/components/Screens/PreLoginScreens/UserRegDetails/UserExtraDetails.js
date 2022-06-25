import React, { useState } from 'react';
import { color2 } from '../../../constants/colors.js';
import { register, uniqueRollNumber } from '../../../service/api';
import '../LoginForm.css';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    // userImage: 'default',
    userEnrollmentNumber: '',
    userBatch: '',
    userCourseAndBranch: ''
}

function UserExtraDetails(props){

    const initialInformation = props.initialInformation;
    console.log("🚀 ~ file: UserExtraDetails.js ~ line 21 ~ UserExtraDetails ~ initialInformation", initialInformation)

    const userInformation = {
        ...initialInformation,
        ...initialValue
    }

    const [userRegisterDetails, setUserRegisterDetails] = useState(userInformation);

    const handleChange = (e) => {
        setUserRegisterDetails({
            ...userRegisterDetails,
            [e.target.name]: e.target.value
        })
    }
    
    const navigate = useNavigate();

    const submitUserRegisterDetails = async(e) => {

        var count = 0;
        console.log(userRegisterDetails);
        for(const property in userRegisterDetails){
            if(!userRegisterDetails[property]){
                console.log(property, "is missing");
                toast.error(`${property.substring(4)} is missing`);
            }else{
                count++
            }
        }

        const isUniqueRollNumber = await uniqueRollNumber(userRegisterDetails.userEnrollmentNumber);

        if(isUniqueRollNumber == 'duplicate enrollment number' ){
            toast.error(isUniqueRollNumber);
            // count--;
        }else{
            userInformation.platform=localStorage.getItem("platform");
            if(count == Object.values(userRegisterDetails).length){
                const apiInformation = await register(userRegisterDetails);
                if(apiInformation.information === 'userCreated'){
                    // console.log();
                    localStorage.clear();
                    navigate('/');
                    toast.success('registeration successfull! Please wait for 48-72 hrs for confirmation')
    
                }else{
                    console.log(apiInformation.information);
                }
            }
        }

    }
    const register__Form = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '0px',
        marginBottom: '20px',
        marginLeft:'0%',
        justifyContent: 'center',
    }

    const heading5 = {
        marginTop: '0px',
        marginLeft:'25px',
    }

    const register__FormEmail = {
        height: '40px',
        marginTop: '20px',
        marginBottom: '15px',
        width:'100%',
    }

    const register__Input={
        display:'flex',
        flexDirection:'column',
        width:'50%',
        marginLeft:'25%',
    }

    const register__FormSubmitButton = {
        height: '45px', 
        marginBottom: '20px',
        background: color2,
        borderRadius: '5px',
        border: 'none'
    }
    
    var batch = [];

    for(var i = 2005; i <= new Date().getFullYear(); i++){
        batch.push(i)
    }

    // console.log(batch);

    return(
        <div style = { register__Form } >
            <h5 style = {heading5} > Enter Details </h5>
            <div >
                <div style = {register__Input} >
                    <div className = 'group'>
                    <label>Course & Branch</label>
                        <select name="userCourseAndBranch"  onChange = { (e) => handleChange(e) } style = {register__FormEmail} default="none">
                            <option value="">Select</option>
                            <option value="B.Tech(CSE)">B.Tech(CSE)</option>
                            <option value="B.Tech(IT)">B.Tech(IT)</option>
                            <option value="B.Tech(ECE)">B.Tech(ECE)</option>
                            <option value="B.Tech(EEE)">B.Tech(EEE)</option>
                            <option value="B.Tech(MAE)">B.Tech(MAE)</option>
                            <option value="B.Tech(Civil)">B.Tech(Civil)</option>
                            <option value="BBA">BBA</option>
                            <option value="MBA">MBA</option>
                        </select>
                    </div>
                    <div className = 'group'>
                        <label>Enrollment Number</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userEnrollmentNumber' type = 'number' placeholder = 'Enrollment Number' />
                    </div>
                    <div className = 'group'>
                        <label>Batch</label>
                        <select name="userBatch"  onChange = { (e) => handleChange(e) } style = {register__FormEmail} default="none">
                            <option value="">Select</option>
                            {
                                batch.map((item, ind) => (
                                    <option value = {item} key={ind} >{item}</option>
                                ))
                            }
                                
                        </select>                   
                         </div>
                   
                    <button style = {register__FormSubmitButton} onClick = { (e) => {submitUserRegisterDetails(e)} } >Submit</button>
                </div>
            </div>           
        </div>
    )

}

export default UserExtraDetails;