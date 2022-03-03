import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './LowerHeaderAdmin.css';
import { color2, color3 } from '../../../constants/colors';

function LowerHeaderAdmin(){
    
    const complete__lowerHeader={
        background: `${color2}`,
        display:'flex',
        width:'100vw',
        flexDirection:'row',
        flexWrap:'wrap',
        height:'45px',
        justifyContent:'center',
        alignItems:'center',
    }

    const items__lowerHeader = {
        margin: '0 10px',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100%'
    };

    const itemsLink__lowerHeader = {
        margin: '0 10px',
        color: `${color3}`,
        textDecoration: 'none',
        height: 'inherit'
    }    

    return(
        <div style = {complete__lowerHeader} > 
            
            <div id = 'aboutUs' style = { items__lowerHeader } >
                
                <Link style = {itemsLink__lowerHeader} to = {'/aboutus'} >ABOUT US</Link>
            
                <div className = 'hoverContent' >
                    <Link className = 'hoverContentLink'  to = {'/visionmission'} >Vision & Mission</Link>
                </div>

            </div>
            
            <div id = 'newsRoom' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/newsroom'} >NEWSROOM</Link>
            </div>

            <div id = 'members' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/members'} >MEMBERS</Link>
                <div className = 'hoverContent' >
                    <Link className = 'hoverContentLink'  to = {'/approvedmembers'} >Approved Members</Link>
                    <Link className = 'hoverContentLink'  to = {'/pendingmembers'} >Pending Members</Link>
                </div>
            </div>
            
            <div id = 'events' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/events'} >EVENTS</Link>
            </div>
            
            <div id = 'gallery' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/gallery'} >GALLERY</Link>
            </div>
            
            <div id = 'engage' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/'} >ENGAGE</Link>
                <div className = 'hoverContent' >
                    <Link className = 'hoverContentLink'  to = {'/mentor'} >BE A MENTOR</Link>
                    <Link className = 'hoverContentLink'  to = {'/volunteer'} >VOLUNTEER</Link>
                    <Link className = 'hoverContentLink'  to = {'/shareachievement'} >SHARE ACHIEVEMENT</Link>
                    <Link className = 'hoverContentLink'  to = {'/shareopportunity'} >SHARE OPPORTUNITY</Link>
                    <Link className = 'hoverContentLink'  to = {'/invitefriends'} >INVITE FRIENDS</Link>
                </div>
            </div>
            
            <div id = 'contactUs' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/contactus'} >CONTACT US</Link>
            </div>

            <div id = 'alumniAssist' style = { items__lowerHeader } >
                <Link style = {itemsLink__lowerHeader} to = {'/alumniassist'} >ALUMNI ASSIST</Link>
            </div>
        </div>
    )
}

export default LowerHeaderAdmin;