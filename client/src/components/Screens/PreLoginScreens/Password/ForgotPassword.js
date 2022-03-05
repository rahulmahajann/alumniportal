import React from "react";
import AuthScreenBody from "../../../CommonComponents/Body/AuthScreenBody";
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from "../../../CommonComponents/Header/LowerHeader";
import { college__logo } from "../../../constants/images";
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader'
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword(){
    return(
        <>
            <UpperHeader image = {college__logo}/>
            <LowerHeader /> 
            <AuthScreenBody Heading = {'Reset Password'}
            Content = 
            {
                <ForgotPasswordForm />     
            } 
            />
            <Footer />
        </>
    )
}

export default ForgotPassword;