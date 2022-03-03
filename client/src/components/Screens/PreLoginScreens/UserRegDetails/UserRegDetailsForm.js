import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { color2 } from '../../../constants/colors.js';
import { adminRegister } from '../../../service/api';
import '../LoginForm.css';


const initialValue = {
    userSalutaion: '',
    userEmail: '',
    userPassword: '',
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

    console.log(initialValue);


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

    const [adminRegisterDetails, setAdminRegisterDetails] = useState(initialValue);

    const handleChange = (e) => {
        setAdminRegisterDetails({
            ...adminRegisterDetails,
            [e.target.name]: e.target.value
        })
    }

    // const submitUserEmail = async(e) => {
    //     // console.log(adminRegisterDetails);
    //     const res = await adminRegister(adminRegisterDetails);
    // }

    return(
        <div style = { register__Form } >
            <h5 style = {heading5} > Enter Details </h5>
            <div >
                <div style = {register__Input} >
                    <div className = 'group'>
                        <label>Name</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminName' type = 'text' placeholder = 'Name' />
                    </div>
                    <div className = 'group'>
                        <label>Email</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminEmail' type = 'email' placeholder = {currentUserEmail} value={currentUserEmail} disabled />
                    </div>
                    <div className = 'group'>
                        <label>Password</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminPassword' type = 'password' placeholder = 'Password' />
                    </div>
                    <div className = 'group'>
                        <label>City</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminId' type = 'text' placeholder = 'Employee Id' />
                    </div>
                <button style = {register__FormSubmitButton} >Submit</button>
                </div>
            </div>
            <hr />
            <h3 style = {heading3} >
                Already Member?
                <Link style = {link__Style} to = {'/loginadmin'} >
                    {'\t'}Click here to login
                </Link>
            </h3>
        </div>
    
    )
}

export default UserRegDetailsForm;