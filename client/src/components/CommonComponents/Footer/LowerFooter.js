import React from "react";

import { color1, color2, color3, color4, color5, color6 } from '../../constants/colors';

function LowerFooter(){

    const complete__lowerFooter = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '50px',
        color: `${color3}`,
        background: `${color6}`
    }

    return(
        <div style = {complete__lowerFooter} >
            <p>Made by 2023 Batch</p>
        </div>
    )
}

export default LowerFooter;