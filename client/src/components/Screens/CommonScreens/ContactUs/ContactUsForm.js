import React, {useState} from 'react';
import { color2 } from '../../../constants/colors';
import './ContactUsForm.css';

const initialValue = {
    userName: '',
    userEmail: '',
    userPhoneNo: '',
    subject: '',
    message: ''
}

function ContactUsForm(){

    const [formData, setFormData] = useState(initialValue);

    const updateValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    
    const submitFormValue = (e) => {
        // console.log('submit button clicked FROM contactUs');
        console.log('formData', formData);
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

    const register__FormMessage = {
        height: '120px',
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

    return(
        <div>
            <h4>Please use the form below to contact us</h4>
            <div style = {register__Form} >
                <div style = {login__Input} >
                    <div className = 'group' >
                        <label>Name</label>
                        <input style = {register__FormEmail} type = 'text' onChange = { (e) => updateValue(e)} name = 'userName' placeholder = 'Name' />
                    </div>

                    <div className = 'group'>
                        <label>Personal Email ID</label>
                        <input style = {register__FormEmail} type = 'email' onChange = { (e) => updateValue(e)} name = 'userEmail' placeholder = 'EmailId' />
                    </div>

                    <div className = 'group'>
                        <label>Contact No.</label>
                        <input style = {register__FormEmail} type = 'number'  onChange = { (e) => updateValue(e)} name = 'userPhoneNo' placeholder = 'Phone Number' />
                    </div>

                    <div className = 'group'>
                        <label>Subject</label>
                        <input style = {register__FormEmail} type = 'text' onChange = { (e) => updateValue(e)} name = 'subject' placeholder = 'Subject' />
                    </div>

                    <div className = 'group'>
                        <label>Message</label>
                        <textarea style = {register__FormMessage} rows = '4' cols = '50' onChange = { (e) => updateValue(e)} name = "message" placeholder = 'Message' />
                    </div>
                    
                </div>
                <div>
                    CAPTCHA
                </div>
                <button style = {register__FormSubmitButton} onClick = { (e) => submitFormValue(e) } >SUBMIT</button>
            </div>
        </div>

    )
}

export default ContactUsForm;