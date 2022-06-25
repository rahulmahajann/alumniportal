import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  color10,
  color11,
  color2,
  color3,
  color5,
  color6,
  color8,
} from "../../constants/colors";
import { login, userByGoogle } from "../../service/api";
import "./LoginForm.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginWithGoogle from "../../../service/Auth/googleLogin";

toast.configure();

const initialValue = {
  userEmail: "",
  userPassword: "",
};

function LoginForm(props) {
  const main__Component = {
    width: "80%",
  };

  const externlButton = {
    display: "flex",
    flexDirection: "column",
    margin: "15px",
    marginBottom: "25px",
  };

  const login__Title = {
    fontSize: "18px",
  };

  const externalButton__Linkedin = {
    margin: "5px",
    minHeight: "45px",
    borderRadius: "10px",
    color: color3,
    background: color10,
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    border: "none",
  };

  const linkedin__Style = {
    // marginRight: '150px',
    // marginLeft: '15px'
    fontSize: "22px",
  };

  const externalButton__Google = {
    margin: "5px",
    minHeight: "45px",
    borderRadius: "10px",
    color: color3,
    background: color11,
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    border: "none",
  };

  const google__Style = {
    // marginRight: '150px',
    // marginLeft: '15px'
    fontSize: "22px",
  };

  const heading5Span = {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #000",
    lineHeight: "0.1em",
    margin: "10px 0 20px",
  };

  const span = {
    background: "#fff",
    padding: "0 10px",
    borderRadius: "50%",
    height: "150px",
    width: "10px",
    background: color8,
    border: "1px solid black",
  };

  const register__Form = {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "25%",
    justifyContent: "center",
  };

  const login__Input = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  };

  const register__FormEmail = {
    height: "40px",
    marginTop: "20px",
    marginBottom: "5px",
    width: "100%",
  };

  const register__FormPassword = {
    height: "40px",
    marginTop: "20px",
    marginBottom: "15px",
    width: "100%",
  };

  const register__FormSubmitButton = {
    height: "45px",
    marginBottom: "20px",
    background: color2,
    borderRadius: "5px",
    border: "none",
  };

  const heading3 = {
    fontSize: "15px",
    marginTop: "10px",
    marginLeft: "27%",
  };

  const link__Style = {
    textDecoration: "none",
    color: color6,
    fontSize: "15px",

  };

  const link_div = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }

  const [userLoginData, setUserLoginData] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLoginData({
      ...userLoginData,
      [e.target.name]: e.target.value,
    });
  };

  const saveUserLoginEmail = async (e) => {
    toast.loading("Logging In");

    const apiInformation = await login(userLoginData);
    if (apiInformation.information.message == "successfully logged in!") {
      console.log(apiInformation.information.message);
      toast.dismiss();
      toast.success(apiInformation.information.message);
      navigate("/user");
      localStorage.setItem("userEmail", userLoginData.userEmail);
    } else {
      toast.dismiss();
      toast.error(apiInformation.information.message);
      console.log(apiInformation.information.message);
    }
  };

  const heading5 = {
    marginTop: "10px",
  };

  const newDiv = {
    display: "flex",
    flexDirection: "column",
  };

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
          
          
          toast.error("You have not signed up");
          navigate('/register');
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
  }

  return (
    <div style={newDiv}>
      <h4 style={login__Title}>{props.title}</h4>
      <div style={externlButton}>
        {/* <button style={externalButton__Linkedin}>
          <FontAwesomeIcon style={linkedin__Style} icon={faLinkedin} />
          {props.auth} with Linkedin
        </button> */}
        <button style={externalButton__Google} onClick={googleLogin}>
          <FontAwesomeIcon style={google__Style} icon={faGoogle} />
          Continue with Google
        </button>
      </div>
      <h5 style={heading5Span}>
        <span style={span}>or</span>
      </h5>
      <h5 style={heading5}> Login with your Email Address </h5>
      <div style={register__Form}>
        <div style={login__Input}>
          <div className="group">
            <label>Email</label>
            <input
              onChange={(e) => handleChange(e)}
              style={register__FormEmail}
              name="userEmail"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="group">
            <input
              onChange={(e) => handleChange(e)}
              style={register__FormPassword}
              name="userPassword"
              type="password"
              placeholder="password"
            />
            <label>Password</label>
          </div>
        </div>
        <div style = {link_div} >
          <Link style={link__Style} to={"/resetpassword"}>
            Reset Password?
          </Link>
          <Link style={link__Style} to={"/forgotpassword"}>
            Forgot Password?
          </Link>
        </div>
        <button
          onClick={(e) => saveUserLoginEmail(e)}
          style={register__FormSubmitButton}
        >
          Submit
        </button>
      </div>
      <hr />
      <h3 style={heading3}>
        Not registered yet?
        <Link style={link__Style} to={"/register"}>
          {"\t"}Register
        </Link>
      </h3>
    </div>
  );
}

export default LoginForm;
