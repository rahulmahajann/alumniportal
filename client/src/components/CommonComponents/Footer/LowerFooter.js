import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faChrome, faGithub, faYahoo } from '@fortawesome/free-brands-svg-icons';
import './LowerFooter.css';
import { color1, color2, color3, color4, color5, color6 } from '../../constants/colors';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { rahulGithubLink, rahulInstaLink, rahulLinkedinLink, rahulMailLink } from "../../constants/links";

function LowerFooter(){

    const complete__lowerFooter = {
        display:'flex',
        flexFlow:'row-wrap',
        justifyContent:'space-around',
        alignItems:'center',
        left: '0',
        bottom: '0',
        width: '100%',
        // height: '50px',
        color: `${color3}`,
        background: `${color6}`,

    }

    const personal_branding={
        fontFamily:'Monaco',
        fontSize:'20px',
        minWidth:'200px',
    }

    const social_container={
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around',
        

    }

    const link__upperFooter = {
        color: 'inherit',
        textDecoration: 'none',
    }

    const linkDiv__upperFooter = {
        margin: '10px',
        height: '20px'
    }

    const linkIcon__upperHeader = {
        hover: 'red',
        height: '20px',
        width:'20px',
    }
    const image_style={
        height:'200px',
        width:'200px',
        margin:'25px 0',
    }
    const profile_Card={
        color:'#F0F0F0',
        // border:'solid 1px green',
        margin:'10px    '
    }
    const heading={
        color:'#E06020',
        fontSize:'21.5px',
    }

    return(
        <div style = {complete__lowerFooter} >
            <div style={personal_branding}>
                <div style={heading}>Creators:</div>
                <div style={profile_Card}> 
                    <div>Rahul Mahajan OP</div>
                    <div style={social_container}>
                        <a href = {rahulLinkedinLink} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'linkedin_Icon' style = { linkIcon__upperHeader } icon = { faLinkedin } />
                        </a>
                        <a href = {rahulGithubLink} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'github_Icon' style = { linkIcon__upperHeader } icon = { faGithub } />
                        </a>
                        <a href = {rahulInstaLink} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'instagram_Icon' style = { linkIcon__upperHeader } icon ={faInstagram} />
                        </a>
                        <a href = {rahulMailLink} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'mail_Icon' style = { linkIcon__upperHeader } icon ={faEnvelope} />
                        </a>
                    </div>
                    {/* <img style={image_style} src="http://res.cloudinary.com/mehulp1612/image/upload/v1651606695/insta-clone/ezxognyw5ztpyc36o5rb.png"></img> */}
                </div>
                <div style={profile_Card}> 
                    <div>Mehul Pandey</div>
                    <div style={social_container}>
                        <a href = {""} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'linkedin_Icon' style = { linkIcon__upperHeader } icon = { faLinkedin } />
                        </a>
                        <a href = {""} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'github_Icon' style = { linkIcon__upperHeader } icon = { faGithub } />
                        </a>
                        <a href = {""} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'instagram_Icon' style = { linkIcon__upperHeader } icon = { faInstagram } />
                        </a>
                        <a href = {""} target = '_blank' style = {link__upperFooter}>
                            <FontAwesomeIcon id = 'mail_Icon' style = { linkIcon__upperHeader } icon ={faEnvelope} />
                        </a>
                    </div>
                
                    {/* <img style={image_style} src="http://res.cloudinary.com/mehulp1612/image/upload/v1651606695/insta-clone/ezxognyw5ztpyc36o5rb.png"></img> */}
                </div>
            </div>
        
            <div style={personal_branding}>
                    <img  style={image_style} src="https://adgitmdelhi.ac.in/wp-content/uploads/2020/05/BBDG-Logo-150x150-1.png"></img>
                    
            </div>
            <div style={{...personal_branding,fontSize:'18px',}}>
                <div style={{color:'#fa6020',fontSize:'25px'}}>Contact Info:</div>
                <div style={{margin:'10px 0 0 10px'}}>
                    <div style={heading}>Location:</div>
                    <div>FC-26, Shastri Park, New Delhi - 110 053</div>
                    <div style={heading}>Phone Numbers</div>
                    <div>+91(11) 49905900-99</div>
                    <div style={heading}>E-mail:</div>
                    <div>info@adgitmdelhi.ac.in</div>
                </div>
            </div>
            
        </div>
    )
}

export default LowerFooter;