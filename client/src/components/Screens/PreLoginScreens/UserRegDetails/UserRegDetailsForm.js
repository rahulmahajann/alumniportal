import React, { useState,useEffect } from 'react';
import { color2 } from '../../../constants/colors.js';
import { register } from '../../../service/api';
import '../LoginForm.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



const initialValue = {
    userSalutation: '',
    userEmail: '',
    userName:'',
    userGender:'',
    userDOB:'',
    userMobile:'',
    userCity:'',    
}



function UserRegDetailsForm(props){

    const [currentUserEmail, setCurrentUserEmail]=useState('');

    useEffect(()=>{
        const temp = localStorage.getItem('email');
        setCurrentUserEmail(temp);
    },[])

    initialValue.userEmail = currentUserEmail;

    // console.log(initialValue);


    const register__Form = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '0px',
        marginBottom: '20px',
        marginLeft:'0%',
        justifyContent: 'center',
        // color:adminRegis
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

    const register__FormSubmitButton = {
        height: '45px', 
        marginBottom: '20px',
        background: color2,
        borderRadius: '5px'
    }

    const heading3 = {
        fontSize: '15px',
        marginTop: '10px',
        marginLeft: '25%',

    }

    const link__Style = {
        textDecoration: 'none',
        color: 'inherit'
    }

    const register__Input={
        display:'flex',
        flexDirection:'column',
        width:'50%',
        marginLeft:'25%',
    }

    const [userRegisterDetails, setUserRegisterDetails] = useState(initialValue);

    const handleChange = (e) => {
        setUserRegisterDetails({
            ...userRegisterDetails,
            [e.target.name]: e.target.value
        })

        // console.log(userRegisterDetails);
    }

    const submitUserRegisterDetails = async(e) => {
        e.preventDefault();
        console.log(userRegisterDetails);
        const apiInformation = await register(userRegisterDetails);
        console.log(apiInformation);
        if(apiInformation.information === 'userCreated'){
            // console.log();
        }else{
            console.log(apiInformation.information);
        }
    }

    const genderOptions=['Male','Female','Other'];
    const salutationOptions=['Mr.','Mrs.','Ms.','Dr.','Prof.','Other'];

    return(
        <div style = { register__Form } >
            <h5 style = {heading5} > Enter Details </h5>
            <div >
                <div style = {register__Input} >
                    <div className = 'group'>

                    <label>Salutation</label>
                        <select name="userSalutation"  onChange = { (e) => handleChange(e) } style = {register__FormEmail} default="none">
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                            <option value="Prof">Prof</option>
                            <option value="Other">Other</option>
                        </select>
                        {/* <label>Salutation</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userSalutation' type = 'text' placeholder = 'Salutation' /> */}
                    </div>
                    <div className = 'group'>
                        <label>Name</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userName' type = 'text' placeholder = 'Name' />
                    </div>
                    <div className = 'group'>
                        <label>Email</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userEmail' type = 'email' placeholder = 'Email Id' value={currentUserEmail} disabled />
                    </div>
                    <div className = 'group'>
                        <label>Gender</label>
                        <select name="userGender"  onChange = { (e) => handleChange(e) } style = {register__FormEmail} default="none">
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        {/* <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userGender' type = 'text' placeholder = 'Gender' /> */}
                    </div>
                    <div className = 'group'>
                        <label>DOB</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userDOB' type = 'date' placeholder = 'DOB' max={new Date().toISOString().split("T")[0]}/>
                    </div>
                    <div className = 'group'>
                        <label>Mobile</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userMobile' type = 'number' placeholder = 'Mobile' />
                    </div>
                    <div className = 'group'>
                        <label>City</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userCity' type = 'text' placeholder = 'City' />
                    </div>
                <button style = {register__FormSubmitButton} onClick = { (e) => {submitUserRegisterDetails(e)} } >Submit</button>
                </div>
            </div>
           
        </div>
    
    )
}

export default UserRegDetailsForm;