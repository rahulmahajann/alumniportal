import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { color2 } from '../../constants/colors';
import { adminLogin } from '../../service/api';
import './LoginForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
    adminEmail: '',
    adminPassword: '',

}

toast.configure();

function LoginAdminForm(props){ 

    const login__Title = {
        fontSize: '18px'
    }

    const register__Form = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft:'25%',
        justifyContent: 'center',
    }

    const register__FormEmail = {
        height: '40px',
        marginTop: '20px',
        marginBottom: '15px',
        width:'100%',
    }

    const register__FormPassword = {
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
        marginLeft: '27%'
    }

    const link__Style = {
        textDecoration: 'none',
        color: 'inherit'
    }

    const login__Input={
        width:'100',
        marginLeft:0,
        display:'flex',
        flexDirection:'column', 
    }

    const [adminLoginDetails, setAdminLoginDetails] = useState(initialValue);
        
    const handleChange = (e) => {
        setAdminLoginDetails({
            ...adminLoginDetails,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const saveUserLoginEmail = async (e) => {
        // console.log(adminLoginDetails);
        toast.loading("Logging In");
        const apiInformation = await adminLogin(adminLoginDetails);
        // console.log(apiInformation.information.message);
        if(apiInformation.information.message === 'successfully logged in!'){
            // console.log(apiInformation.adminId);
            localStorage.setItem('IngmmDdooAin', apiInformation.information.adminUniqueId)
            localStorage.setItem('isAdmin', apiInformation.information.isAdmin);
            localStorage.setItem('email', adminLoginDetails.adminEmail);
            navigate('/admin');
            toast.dismiss();
            toast.success(apiInformation.information.message);
        }else{
            toast.error(apiInformation.information.message);
        }
    }

    return(
        <div>
            <h4 style = { login__Title } >{props.title}</h4>
            <div style = {register__Form} >
                <div style = {login__Input}>
                    <div className = 'group' >
                        <label>Email</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'adminEmail' type = 'email' placeholder = 'email' />
                    </div>
                    <div className = 'group' >
                        <label>Password</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormPassword} name = 'adminPassword' type = 'password' placeholder = 'password' /> 
                    </div>
                </div>
                <Link style = {link__Style} to = {'/forgotpassword'} >
                    Forgot Password?
                </Link>
                <button onClick = { (e) => saveUserLoginEmail(e) } style = {register__FormSubmitButton}>Submit</button>
            </div>
            <hr />
            <h3 style = {heading3} >
                Not registered yet?
                <Link style = {link__Style} to = {'/registeradmin'} >
                    {'\t'}Register
                </Link>
            </h3>
        </div>
    )
}

export default LoginAdminForm;