import React, { useState,useEffect } from 'react';
import { color2 } from '../../../constants/colors.js';
import { uniqueMobile } from '../../../service/api';
import '../LoginForm.css';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserExtraDetails from './UserExtraDetails.js';

// files import

toast.configure();


const initialValue = {
    userSalutation: '',
    userEmail: '',
    userName:'',
    userGender:'',
    userDOB:'',
    userMobile:'',
    userCity:'',    
    userImage:'',
}



function UserRegDetailsForm(props){

    const [currentUserEmail, setCurrentUserEmail]=useState('');

    useEffect(()=>{
        const temp = localStorage.getItem('email');
        setCurrentUserEmail(temp);
    },[])

    initialValue.userEmail = currentUserEmail;

    // console.log(initialValue);


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
        borderRadius: '5px',
        border: 'none'
    }

    const register__Input={
        display:'flex',
        flexDirection:'column',
        width:'50%',
        marginLeft:'25%',
    }

    const news__FormTitle = {
        height: '40px',
        marginTop: '20px',
        marginBottom: '15px',
        width:'100%',
    }
    const [userRegisterDetails, setUserRegisterDetails] = useState(initialValue);
    const [continueForm, setContinueForm] = useState(false);
    const [isImageUploaded, setIsImageUploaded] = useState(false);


    const handleChange = async (e) => {


        setUserRegisterDetails({
            ...userRegisterDetails,
            [e.target.name]: e.target.value
        })
    }

    const uploadToCloudinary = async (img) => {
        const data = new FormData();
        data.append("file", img);
        data.append('upload_preset', 'insta-clone');
        data.append("cloud_name", "mehulp1612");
        const options = {
            method: "POST",
            body: data,
        };

        const imgResponse = await fetch('https://api.Cloudinary.com/v1_1/mehulp1612/image/upload', options);
        const imgURL = await imgResponse.json();

        setIsImageUploaded(true);

        setUserRegisterDetails({
            ...userRegisterDetails,
            userImage:imgURL.url
        });
    }

    const loadNewData = async (e) => {

        let count = 0;

        // const data = new FormData();
        // data.append("file", img);
        // data.append('upload_preset', 'insta-clone');
        // data.append("cloud_name", "mehulp1612");
        // const options = {
        //     method: "POST",
        //     body: data,
        // };

        // const imgResponse = await fetch('https://api.Cloudinary.com/v1_1/mehulp1612/image/upload', options);
        // const imgURL = await imgResponse.json();

        // setUserRegisterDetails({
        //     ...userRegisterDetails,
        //     userImage:imgURL.url
        // });
        
        console.log(userRegisterDetails);
        for(const property in userRegisterDetails){
            if(!userRegisterDetails[property]){
                toast.error(`${property.substring(4)} is missing`);
            }else{
                count++
            }
        }

        const isUniqueNumber = await uniqueMobile(userRegisterDetails.userMobile);

        if(isUniqueNumber == 'duplicate mobile number'){
            toast.error(isUniqueNumber);
            // count--;
        }else{
            if(count == Object.keys(userRegisterDetails).length){
                setContinueForm(true)
            }
        }

    }

    return(
        <div style = { register__Form } >
            <h5 style = {heading5} > Enter Details </h5>
            <div >
                <div style = {register__Input} >
                    <div className = 'group'>
                    <label>Salutation</label>
                        <select name="userSalutation"  onChange = { (e) => handleChange(e) } style = {register__FormEmail} default="none" disabled = {continueForm}>
                            <option value="">Select</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Mr">Mr</option>
                            <option value="Dr">Dr</option>
                            <option value="Prof">Prof</option>
                            <option value="Er">Er</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className = 'group'>
                        <label>Name</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userName' type = 'text' placeholder = 'Name' disabled = {continueForm}/>
                    </div>
                    <div className = 'group'>
                        <label>Email</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userEmail' type = 'email' placeholder = 'Email Id' value={currentUserEmail} disabled />
                    </div>
                    <div className = 'group'>
                        <label>Gender</label>
                        <select name="userGender"  onChange = { (e) => handleChange(e) } style = {register__FormEmail} default="none" disabled = {continueForm}>
                            <option value="">Select</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        {/* <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userGender' type = 'text' placeholder = 'Gender' /> */}
                    </div>
                    <div className = 'group'>
                        <label>DOB</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userDOB' type = 'date' placeholder = 'DOB' max={new Date().toISOString().split("T")[0]} disabled = {continueForm}/>
                    </div>
                    <div className = 'group'>
                        <label>Mobile</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userMobile' type = 'number' placeholder = 'Mobile' disabled = {continueForm}/>
                    </div>
                    <div className = 'group'>
                        <label>City</label>
                        <input onChange = { (e) => handleChange(e) } style = {register__FormEmail} name = 'userCity' type = 'text' placeholder = 'City' disabled = {continueForm}/>
                    </div>
                    <div className='group'>
                        <label>Image</label>
                        <input style={news__FormTitle} type="file" name="img" onChange={(e) => uploadToCloudinary(e.target.files[0])} />  
                    </div>
                    <button style = {register__FormSubmitButton} onClick = { (e) => {loadNewData(e)} } disabled = {!isImageUploaded} >Continue</button>
                </div>
            </div>

            { continueForm && <UserExtraDetails initialInformation = {userRegisterDetails} /> }
           
        </div>
    
    )
}

export default UserRegDetailsForm;