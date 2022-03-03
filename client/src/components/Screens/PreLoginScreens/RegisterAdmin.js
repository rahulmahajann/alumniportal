// libraries import
import React from 'react';

// files import
import UpperHeader from '../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../constants/images';
import LowerHeader from '../../CommonComponents/Header/LowerHeader';
import Footer from '../../CommonComponents/Footer/Footer';
import { registerScreenHeading } from '../../constants/strings';
import RegisterAdminForm from './RegisterAdminForm';
import AuthScreenBody from '../../CommonComponents/Body/AuthScreenBody';

function RegisterAdmin(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <AuthScreenBody 
                Heading = {'Admin Register'} 
                Content = { 
                        <
                            RegisterAdminForm title = {registerScreenHeading} 
                            auth = {'Register'} 
                        /> 
                } 
            />
            <Footer />
        </>
    )
}

export default RegisterAdmin;