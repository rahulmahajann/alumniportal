// libraries import
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { color3 } from '../../../constants/colors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// files import

toast.configure();

function UpperHeaderUserLog(props) {

    const complete__upperHeader ={
        display: 'flex',
        flexDirection: 'row',
        start: 0,
        alignItems: 'center',   
        height: '12vh',
        background:`${color3}`
        
    };

    const imageWrapper__headerUpper = {
        height: '100%',
        width: '65%',
    }

    const image__headerUpper = {
        position: 'relative', 
        width: '65%',
        height:'90%',  
        objectFit: 'scale-down',
        margin: '0.5vh 2vw',
    };

    const linkDiv__headerUpper = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        width:'25vw',
        height:'100%'
    };

    const link__linkDiv = {
        color: 'inherit',
        textDecoration: 'none',
        margin: '5px'
    }

    const [headerEmail, setHeaderEmail] = useState('');
    console.log(headerEmail);
    useEffect(() => {
        const temp = localStorage.getItem('userEmail')
        setHeaderEmail(temp)
    })

    const navigate = useNavigate(); 
        
    return(
        <div style = { complete__upperHeader } >
            
            <Link style = { imageWrapper__headerUpper } to = { '/' }>
                <img  style = { image__headerUpper } src = {props.image} alt = 'college logo' />
            </Link>

            <div style = { linkDiv__headerUpper } >
                <Link style = { link__linkDiv } to = {'/userprofile'} >{headerEmail}</Link>   
                {/* <Link to = {'/'} onClick = {logoutFunction} >Logout</Link> */}
                {/* <button onClick = { logoutFunction } >LogOut</button> */}
            </div> 


        </div>
    )
}

export default UpperHeaderUserLog;