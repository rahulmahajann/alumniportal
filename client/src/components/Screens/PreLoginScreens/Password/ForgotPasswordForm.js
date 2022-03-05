import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../LoginForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color2 } from '../../../constants/colors';
import { sendOtp, updatePassword } from '../../../service/api';



function ForgotPasswordForm(){

    const navigate=useNavigate();

    const [emailChecked,setEmailChecked] = useState(false);
    const [otpChecked,setOtpChecked]=useState(false);
    const [otp,setOtp]=useState();
    const [userDetails,setUserDetails] = useState({
        email:'',
        otp:'',
        newPassword:''
    });

    const login__Title = {
        fontSize: '18px'
    }

    const form__contianer={
        display:'flex',
        flexDirection:'column',
        width:'50%',

    }

    const register__Form = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft:'0%',
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
        width:'100%',
        marginLeft:0,
        display:'flex',
        flexDirection:'column', 
    }

    const handleChange =(e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]:e.target.value
        });
    }
    const handleEmail = async(e) =>{
        e.preventDefault();
        console.log(userDetails.email);
        const apiInformation=await sendOtp(userDetails.email);
        if(apiInformation==="User not Found"){
            toast.error(apiInformation);
        }
        else{

        setOtp(apiInformation);
        toast.success("OTP has been sent to the registered email");
        setEmailChecked(true);
        }
    }

    const handleOtp = (e) => {
        e.preventDefault();
        if(userDetails.otp==otp){
            toast.success("OTP Matched");
            setOtpChecked(true);
        }
        else{
            toast.error("Invalid otp");
        }

    }

    const handleNewPassword = async (e) => {
        e.preventDefault();

        const apiInformation = await updatePassword({
            userEmail:userDetails.email,
            userPassword:userDetails.newPassword
        });

        if(apiInformation){
            navigate('/login');
            toast.success("Password Changed Successfully \tLogin with new password");
            
        }
        else{
            toast.error("Some internal error occured \t Try again after sometime");
        }

    }
    return(

        <div style={form__contianer}>
            <h4 style = { login__Title } >Fill the below form for resetting password</h4>
            <div style = {register__Form} >
                <div style = {login__Input}>
                   <div className = 'group' >
                        <label>Email</label>
                        <input onChange ={(e) => handleChange(e)}  style = {register__FormEmail} name = 'email' type = 'email' placeholder = 'email' />
                    </div>
                    <button style={register__FormSubmitButton} onClick = { (e) => handleEmail(e) }>Get OTP</button>
                    {emailChecked && 
                        <div style= {login__Input}>
                        <div className = 'group' >
                            <label>OTP</label>
                            <input style = {register__FormPassword} onChange={(e) => handleChange(e)} name = 'otp' type = 'password' placeholder = 'OTP' /> 
                        </div>
                        <button style={register__FormSubmitButton} onClick = { (e) => handleOtp(e) }>Check OTP</button>
                        </div>
                    }
                    {otpChecked && 
                        <div style= {login__Input}>
                        <div className = 'group' >
                            <label>New Password</label>
                            <input style = {register__FormPassword} onChange={(e) => handleChange(e)} name = 'newPassword' type = 'password' placeholder = 'Password' /> 
                        </div>
                        <button style={register__FormSubmitButton} onClick = { (e) => handleNewPassword(e) }>Set Password</button>
                        </div>
                    }
                </div>
                </div>
                </div>
    
    )

}



export default ForgotPasswordForm;