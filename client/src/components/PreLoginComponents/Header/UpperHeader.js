// libraries import
import React from 'react';
import { Link } from 'react-router-dom';

// files import
import { color3 } from '../../constants/colors';

function UpperHeader(props) {

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
    
        
    return(
        <div style = { complete__upperHeader } >
            
            <Link style = { imageWrapper__headerUpper } to = { '/' }>
                <img  style = { image__headerUpper } src = {props.image} alt = 'college logo' />
            </Link>

            <div style = { linkDiv__headerUpper } >
                <Link style = { link__linkDiv } to = {'/register'} >Register</Link>   
                <Link style = { link__linkDiv } to = {'/login'} >Login</Link>   
                <Link style = { link__linkDiv } to = {'/loginadmin'} >Admin</Link>   
            </div> 


        </div>
    )
}

export default UpperHeader;