// libraries import
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faChrome, faChromecast, faTwitter } from '@fortawesome/free-brands-svg-icons';

// files import
import { collegeWebsiteLink, collegeFacebookLink, collegeInstagramLink, collegeLinkedinLink, collegeTwitterLink } from '../../constants/links';
import './UpperFooter.css';

function UpperFooter(){

    const complete__upperFooter = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        left: '0',
        marginBottom: '5px',
        bottom: '55px',
        width: '100%',
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
        height: '30px',
        width:'30px',
    }

    return(

        <div style = {complete__upperFooter}>
            <div style = {linkDiv__upperFooter} >
                <a
                    href = {collegeWebsiteLink}
                    target = '_blank'
                    style = {link__upperFooter}
                >
                    <FontAwesomeIcon id = 'websiteIcon' style = { linkIcon__upperHeader } icon = { faChrome } />
                </a>
            </div>

            <div style = {linkDiv__upperFooter} >
                <a
                    href = {collegeFacebookLink}
                    target = '_blank'
                    style = {link__upperFooter}
                >
                    <FontAwesomeIcon id = 'facebookIcon' style = { linkIcon__upperHeader } icon = { faFacebook } />
                </a>
            </div>
            <div style = {linkDiv__upperFooter} >
                <a
                    href = {collegeTwitterLink}
                    target = '_blank'
                    style = {link__upperFooter}
                >
                    <FontAwesomeIcon id = 'twitterIcon' style = { linkIcon__upperHeader } icon = { faTwitter } />
                </a>
            </div>

            <div style = {linkDiv__upperFooter} >
                <a
                    href = {collegeInstagramLink}
                    target = '_blank'
                    style = {link__upperFooter}
                >
                 <FontAwesomeIcon id = 'instagramIcon' style = { linkIcon__upperHeader } icon = { faInstagram } />
                </a>
            </div>

            <div style = {linkDiv__upperFooter} >
                <a
                    href = {collegeLinkedinLink}
                    target = '_blank'
                    style = {link__upperFooter}
                >
                    <FontAwesomeIcon id = 'linkedinIcon' style = { linkIcon__upperHeader } icon = { faLinkedin }/>
                </a>
            </div>
        </div>
    
    )
}

export default UpperFooter;

