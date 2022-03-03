// libraries import
import React from 'react';

// files import
import UpperHeader from '../../PreLoginComponents/Header/UpperHeader';
import LowerHeader from '../../CommonComponents/Header/LowerHeader';
import AuthScreenBody from '../../CommonComponents/Body/AuthScreenBody';
import Footer from '../../CommonComponents/Footer/Footer';
import RegisterForm from './RegisterForm';
import { registerScreenHeading } from '../../constants/strings';
import { college__logo } from '../../constants/images';

function Register(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <AuthScreenBody 
                Heading = {'Register'} 
                Content = { 
                            <
                                RegisterForm title = {registerScreenHeading} 
                                auth = {'Register'} 
                            /> 
                } 
            />
            <Footer />
        </>
    )
}

export default Register;