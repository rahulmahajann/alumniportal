import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RegisterForm.css';
import { color10, color11, color2, color3, color8 } from '../../constants/colors';
import { newRegisterEmail } from '../../service/api';

const initialValue = {
    userEmail: ''
}

function RegisterForm(props){

    const externlButton = {
        display: 'flex',
        flexDirection: 'column',
        margin: '15px',
        marginBottom: '25px'
    };

    const register__Title = {
        fontSize: '18px'
    }

    const externalButton__Linkedin = {
        margin: '5px',
        minHeight: '45px',
        borderRadius: '10px',
        color: color3,
        background:color10,
        fontSize: '18px',
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        border: 'none',
    }

    const linkedin__Style = {
        // marginRight: '120px',
        // marginLeft: '15px'
        fontSize:'22px',
    }

    const externalButton__Google = {
        margin: '5px',
        minHeight: '45px',
        borderRadius: '10px',
        color: color3,
        background: color11,
        fontSize: '18px',
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        border: 'none'
    }
    
    const google__Style = {
        // marginRight: '120px',
        // marginLeft: '15px'
        fontSize:'22px',
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

    const heading5 = {
        marginTop: '10px'
    }

    const register__FormEmail = {
        height: '40px',
        marginTop: '20px',
        marginBottom: '15px',
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

    const heading5Span = {
        width: '100%', 
        textAlign: 'center', 
        borderBottom: '1px solid #000', 
        lineHeight: '0.1em',
        margin: '10px 0 20px', 
    }

    const span = {
        background: '#fff', 
        padding: '0 10px', 
        borderRadius: '50%',
        height: '150px',
        width: '10px',
        background: color8,
        border: '1px solid black'
    }

    const navigate = useNavigate();

    const [userRegisterEmail, setUserRegisterEmail] = useState(initialValue);

    const handleChange = (e) => {
        setUserRegisterEmail({
            ...userRegisterEmail,
            [e.target.name]: e.target.value
        })
    }

    const submitUserEmail = async(e) => {
        // console.log(userRegisterEmail);
        const apiInformation = await newRegisterEmail(userRegisterEmail);
        console.log(apiInformation);
        if(apiInformation.information === 'Unique Email'){
            localStorage.setItem('email', userRegisterEmail.userEmail);
            navigate('/userregdetail');
        }else{
            console.log(apiInformation.information);
        }
    }

    return(
        <div>
            <h4 style = { register__Title } >{props.title}</h4>
            <div style = {externlButton} >
                <button style = {externalButton__Linkedin} > 
                    <FontAwesomeIcon style = { linkedin__Style } icon = {faLinkedin} />
                    {props.auth} with Linkedin
                 </button>
                <button style = {externalButton__Google} > 
                    <FontAwesomeIcon style = { google__Style } icon = {faGoogle} />
                    {props.auth} with Google 
                </button>
            </div>
            <h5 style = {heading5Span} ><span style = {span} >or</span></h5>
            <h5 style = {heading5} > Signup with your Email Address </h5>
            <div className = 'group' style = { register__Form } >
                <label>EmailId</label>
                <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userEmail' type = 'email' placeholder = 'Email' />
                <button onClick = { (e) => submitUserEmail(e) } style = {register__FormSubmitButton} >Submit</button>
            </div>
            <hr />
            <h3 style = {heading3} >
                Already Member?
                <Link style = {link__Style} to = {'/login'} >
                    {'\t'}Click here to login
                </Link>
            </h3>
        </div>
    )
}

export default RegisterForm;