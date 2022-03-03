// libraries import
import React from "react";

// files import
import LowerFooter from "./LowerFooter";
import UpperFooter from "./UpperFooter";

function Footer(){

    const complete__footer = {
        display: 'flex',
        flexDirection: 'column',
    }

    return(
        <div style = {complete__footer} >
            <UpperFooter />
            <LowerFooter />
        </div>
    )
}

export default Footer;