// libraries import
import React from 'react';

// files import
import { loginScreenHeading } from '../../constants/strings';
import UpperHeader from '../../PreLoginComponents/Header/UpperHeader';
import LowerHeader from '../../CommonComponents/Header/LowerHeader';
import AuthScreenBody from '../../CommonComponents/Body/AuthScreenBody';
import Footer from '../../CommonComponents/Footer/Footer';
import LoginForm from './LoginForm';
import { college__logo } from '../../constants/images';

function Login(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <AuthScreenBody 
                Heading = {'Login'} 
                Content = { 
                            <
                                LoginForm title = {loginScreenHeading} 
                                auth = {'Login'} 
                            /> 
                        } 
            />
            <Footer />
        </>
    )
}

export default Login;