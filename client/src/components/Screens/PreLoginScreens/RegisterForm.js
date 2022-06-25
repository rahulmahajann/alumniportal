import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RegisterForm.css';
import { color10, color11, color2, color3, color8 } from '../../constants/colors';
import { newRegisterEmail, userByGoogle } from '../../service/api';
import loginWithGoogle from "../../../service/Auth/googleLogin";
import { toast } from 'react-toastify';


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
        // background: '#fff', 
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

    const submitUserEmail = async(mail,e) => {
        toast.loading("Loading");
        console.log("yaha",mail);
        const apiInformation = await newRegisterEmail({"userEmail":mail});
        console.log(apiInformation);
        if(apiInformation.information === 'Unique Email'){
            toast.dismiss();
            localStorage.setItem('email', mail);
            navigate('/userregdetail');
        }else{
            toast.dismiss();
            toast.error(apiInformation.information);
            console.log(apiInformation.information);
        }
    }

    async function googleLogin() {
        const { payload } = await loginWithGoogle();
        console.log(
          "🚀 ~ file: LoginForm.js ~ line 189 ~ googleLogin ~ payload",
          payload
        );
        const apiInformation = await userByGoogle(payload);
        console.log(apiInformation);
        if(!apiInformation.success){
            if(apiInformation.message == "signup"){
                console.log(payload.userEmail);

                //check these lines
                // alternate pe sahi chalrha hai
                // setUserRegisterEmail({"userEmail":payload.userEmail});
                // console.log(userRegisterEmail);
                localStorage.setItem("platform",'google');               
                submitUserEmail(payload.userEmail);
            }
            else{
                toast.error(apiInformation.message);
                navigate('/login');
            }
        }
        else{
            localStorage.setItem("userEmail",payload.userEmail);
            localStorage.setItem("token",apiInformation.token);
            toast.success("Login Success");
            navigate('/');

        }
        // api call maine abhi bnai hai!
        // if(response)
      }

    return(
        <div>
            <h4 style = { register__Title } >{props.title}</h4>
            <div style = {externlButton} >
                {/* <button style = {externalButton__Linkedin} > 
                    <FontAwesomeIcon style = { linkedin__Style } icon = {faLinkedin} />
                    {props.auth} with Linkedin
                 </button> */}
                <button style = {externalButton__Google} onClick = {googleLogin}> 
                    <FontAwesomeIcon style = { google__Style } icon = {faGoogle} />
                    Continue with Google 
                </button>
            </div>
            <h5 style = {heading5Span} ><span style = {span} >or</span></h5>
            <h5 style = {heading5} > Signup with your Email Address </h5>
            <div className = 'group' style = { register__Form } >
                <label>EmailId</label>
                <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userEmail' type = 'email' placeholder = 'Email' />
                <button onClick = { (e) => submitUserEmail(userRegisterEmail.userEmail,e) } style = {register__FormSubmitButton} >Submit</button>
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