import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { color3, color7, color8 } from '../../constants/colors';

function AuthScreenBody(props){

    const reusableContainer__Content = {
        minHeight: '73.7vh',
        background: color8,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
    }

    const reuseableContainer__Data = {
        background: color3,
        width: '45vw',
        padding: '15px',
        fontSize: '20px',
        lineHeight: '2',
        borderRadius: '20px',
        marginLeft: '25vw',
        boxShadow: `2px 2px ${color7}` ,
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    // changed code
    const reuseableContainer__Datasmall = {
        background: color3,
        width: '95%',
        marginBottom: '20px',
        padding: '15px',
        fontSize: '20px',
        lineHeight: '2',
        borderRadius: '20px',
        marginLeft: '2.5%',
        marginRight:'2.5%',
        boxShadow: `2px 2px ${color7}` ,
        minHeight: '60vh'
    }

    //

    const reusableContainer__Header = {
        margin: '10px',
        marginLeft: '26vw', 
    }


    // changed code

    const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });


    const [small,setSmall]=useState(isTabletOrMobile);
    useEffect(()=>{
        setSmall(isTabletOrMobile);

        // console.log(small);

    },[isTabletOrMobile]);

    //
    
    return(
        <div style = {reusableContainer__Content} >
            <h1 style = {reusableContainer__Header} >{props.Heading}</h1>
            <div style = {isTabletOrMobile?reuseableContainer__Data:reuseableContainer__Datasmall} >
                {props.Content}
            </div>
        </div>
    )
}

export default AuthScreenBody;