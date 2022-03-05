import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { color2 } from "../../../constants/colors";
import { adminLogin, validateEmailNPasswordForReset } from "../../../service/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewResetPasswordForm from "./NewResetPasswordForm";

const initialValue = {
    userEmail: '',
    userPassword: '',

}

toast.configure();

function ResetPasswordForm(){

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

    const [userLoginDetails, setUserLoginDetails] = useState(initialValue);
    const [nextComponent, setNextComponent] = useState(false);

    const handleChange = (e) => {
        setUserLoginDetails({
            ...userLoginDetails,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    const validateEmailAndPassword = async (e) => {
        // console.log(userLoginDetails);
        const apiInformation = await validateEmailNPasswordForReset(userLoginDetails);
        // console.log(apiInformation);
        if(apiInformation == 'Validate'){
            setNextComponent(true)
        }
        // const apiInformation = await adminLogin(userLoginDetails);
        
    }

    const mainScreen = {
        minWidth: '29vw'
    }

    return(
        <div style = {mainScreen} >
            <h4 style = { login__Title } >badi line hai yha ope </h4>
            <div style = {register__Form} >
                <div style = {login__Input}>
                    <div className = 'group' >
                        <label>Email</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userEmail' type = 'email' placeholder = 'email' disabled = {nextComponent} />
                    </div>
                    <div className = 'group' >
                        <label>Password</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormPassword} name = 'userPassword' type = 'password' placeholder = 'password' disabled = {nextComponent} /> 
                    </div>
                </div>
                <button onClick = { (e) => validateEmailAndPassword(e) } style = {register__FormSubmitButton} disabled = {nextComponent} >Continue</button>
            </div>
            {
                nextComponent && <NewResetPasswordForm userEmail = {userLoginDetails.userEmail} />
            }
        </div>
    )
}

export default ResetPasswordForm;