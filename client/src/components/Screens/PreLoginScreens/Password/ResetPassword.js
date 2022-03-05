import React from 'react';
import AuthScreenBody from '../../../CommonComponents/Body/AuthScreenBody';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import ResetPasswordForm from './ResetPasswordForm';

function ResetPassword(){
    return( 
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <AuthScreenBody
                Heading = {'Reset Password'} 
                Content = { 
                            <
                                ResetPasswordForm 
                            /> 
                } 
            />
            <Footer />
        </>
    )
}

export default ResetPassword;