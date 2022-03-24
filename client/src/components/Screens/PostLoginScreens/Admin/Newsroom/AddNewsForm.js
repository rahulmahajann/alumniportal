import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { adminLogin } from '../../service/api';
import './AddNewsForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color2 } from '../../../../constants/colors';
import { addNewsroomData } from '../../../../service/api';

const initialValue = {
    title: '',
    img: '',
    content:''

}

toast.configure();

function AddNewsForm(){ 

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

    const news__FormTitle = {
        height: '40px',
        marginTop: '20px',
        marginBottom: '15px',
        width:'100%',
    }

    const news__FormContent = {
        // height: '40px',
        marginTop: '20px',
        marginBottom: '0px',
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
        fontSize: '18px',
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

    const [newsItemDetails, setNewsItemDetails] = useState(initialValue);
    const [img,setImg] = useState();
        
    const handleChange = (e) => {
        setNewsItemDetails({
            ...newsItemDetails,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = async(e) => {
        e.preventDefault();
        toast.loading("Creating Post...");

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
        console.log(imgURL.url);
        setNewsItemDetails({
            ...newsItemDetails,
            img:imgURL.url
        });

        if(!newsItemDetails.content||!newsItemDetails.img||!newsItemDetails.title){
            toast.dismiss()
            toast.error("Incomplete data");
        }
        else{
            
            const apiInformation = await addNewsroomData(newsItemDetails);
            if(apiInformation.data == "News item created"){
                toast.dismiss();

                navigate('/newsroom');
                toast.success(apiInformation.data);
            }
            else{
                toast.dismiss();
                toast.error("Some error occured");
            }
        }
    }

    const navigate = useNavigate();

    

    return(
        <div>
            <h4 style = { heading3 } >Fill the form to add News Item</h4>
            <div style = {register__Form} >
                <div style = {login__Input}>
                    <div className = 'group' >
                        <label>Title</label>
                        <input onChange = { (e) => handleChange(e) } style = {news__FormTitle} name = 'title' type = 'text' placeholder = 'Title' />
                    </div>
                    <div className='group'>
                        <label>Image</label>
                        <input style={news__FormTitle} type="file" name="img" onChange={(e) => setImg(e.target.files[0])} />  
                    </div>
                    <div className = 'group' >
                        <label>Content</label>
                        <textarea onChange = { (e) => handleChange(e) } style = {news__FormContent} name = 'content' type = 'textarea' placeholder = 'Content' /> 
                    </div>
                    
                </div>
                
                <button  style = {register__FormSubmitButton} onClick={(e)=>{submitHandler(e)}}>Add News</button>
            </div>
            <hr />
            
        </div>
    )
}

export default AddNewsForm;