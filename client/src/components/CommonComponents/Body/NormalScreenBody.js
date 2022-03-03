import React from 'react';
import { color3, color7, color8 } from '../../constants/colors';

function NormalScreenBody(props){

    console.log(props);

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
        minHeight: '60vh'
    }

    const reusableContainer__Header = {
        margin: '10px',
        marginLeft: '26vw' 
    }

    return(
        <div style = {reusableContainer__Content} >
            <h1 style = {reusableContainer__Header} >{props.Heading}</h1>
            <div style = {reuseableContainer__Data} >
                {props.Content}
            </div>
        </div>
    )
}

export default NormalScreenBody;