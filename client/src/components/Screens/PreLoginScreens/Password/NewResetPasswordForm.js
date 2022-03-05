import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color2 } from "../../../constants/colors";
import { updateResetPassword } from "../../../service/api";

const initialValue = {
    userEmail: '',
    userPassword: '',
}

toast.configure();

function NewResetPasswordForm(props){

    // console.log(props.userEmail);


    const navigate = useNavigate();

    const [userNewPasswordDetails, setUserNewPasswordDetails] = useState(initialValue);

    userNewPasswordDetails.userEmail = props.userEmail;

    // console.log(userNewPasswordDetails);

    const register__Form = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft:'25%',
        justifyContent: 'center',
    }

    const login__Input={
        width:'100',
        marginLeft:0,
        display:'flex',
        flexDirection:'column', 
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



    const handleChange = (e) => {
        setUserNewPasswordDetails({
            ...userNewPasswordDetails,
            [e.target.name]: e.target.value
        })
    }

    const [verifiedPassword, setVerifiedPassword] = useState(false);

    const verifyPassword = (e) => {
        if(e.target.value == userNewPasswordDetails.userPassword){
            setVerifiedPassword(true);
            // console.log('same password');
        }else{
            setVerifiedPassword(false);
            // console.log('glt arha hai bhai!');
        }
    }

    

    const updatePassword = async (e) => {
        const apiInformation = await updateResetPassword(userNewPasswordDetails);
        toast.success(apiInformation);
        navigate('/login');
    }

    return(
        <>
            <div style = {register__Form} >
                <div style = {login__Input}>
                    <div className = 'group' >
                        <label>Password</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userPassword' type = 'password' placeholder = 'password' />
                    </div>
                    <div className = 'group' >
                        <label>Confirm Password</label>
                        <input onChange = { (e) => verifyPassword(e) } style = {register__FormPassword} name = 'userConfirmPassword' type = 'password' placeholder = 'confirm password'/> 
                    </div>
                    {
                        verifiedPassword ? 'same password' : 'incorrect password'
                    }
                </div>
                <button onClick = { (e) => updatePassword(e) } style = {register__FormSubmitButton} disabled = {!verifiedPassword} >Submit</button>
            </div>
        </>
    )
}

export default NewResetPasswordForm;