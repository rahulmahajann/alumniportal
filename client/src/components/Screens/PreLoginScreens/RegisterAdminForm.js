import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { color2 } from '../../constants/colors';
import { adminRegister } from '../../service/api';

const initialValue = {
    adminName: '',
    adminEmail: '',
    adminPassword: '',
    adminId:''
}

function RegisterAdminForm(props){

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

    const register__FormSubmitButton = {
        height: '45px', 
        marginBottom: '20px',
        background: color2,
        borderRadius: '5px',
        border: 'none'
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

    const submitUserEmail = async(e) => {
        // console.log(adminRegisterDetails);
        const apiInformation = await adminRegister(adminRegisterDetails);
        console.log(apiInformation);
    }

    return(
        <div style = { register__Form } >
            <h5 style = {heading5} > Signup with your Details </h5>
            <div >
                <div style = {register__Input} >
                    <div className = 'group'>
                        <label>Name</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminName' type = 'text' placeholder = 'Name' />
                    </div>
                    <div className = 'group'>
                        <label>Email</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminEmail' type = 'email' placeholder = 'Email' />
                    </div>
                    <div className = 'group'>
                        <label>Password</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminPassword' type = 'password' placeholder = 'Password' />
                    </div>
                    <div className = 'group'>
                        <label>EmployeeId</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminId' type = 'text' placeholder = 'Employee Id' />
                    </div>
                <button onClick = { (e) => submitUserEmail(e) } style = {register__FormSubmitButton} >Submit</button>
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

export default RegisterAdminForm;