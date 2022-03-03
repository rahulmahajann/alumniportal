// libraries import
import React from 'react';

// files import
import UpperHeader from '../../PreLoginComponents/Header/UpperHeader';
import LowerHeader from '../../CommonComponents/Header/LowerHeader';
import Footer from '../../CommonComponents/Footer/Footer';
import AuthScreenBody from '../../CommonComponents/Body/AuthScreenBody';
import { loginScreenHeading } from '../../constants/strings';
import LoginAdminForm from './LoginAdminForm';
import { college__logo } from '../../constants/images';

function LoginAdmin(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <AuthScreenBody
                Heading = {'Admin Login'} 
                Content = { 
                            <
                                LoginAdminForm title = {loginScreenHeading} 
                                auth = {'Login'} 
                            /> 
                } 
            />
            <Footer />
        </>
    )
}

export default LoginAdmin;