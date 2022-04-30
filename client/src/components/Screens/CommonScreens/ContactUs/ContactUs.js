// libraries import
import React, { useState } from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import Footer from '../../../CommonComponents/Footer/Footer';
import '../../PreLoginScreens/LoginForm.css';
import ContactUsForm from './ContactUsForm';
import AuthScreenBody from '../../../CommonComponents/Body/AuthScreenBody';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderUserLog from '../../../PostLoginComponents/User/Header/UpperHeaderLog';

function ContactUs(){
    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <AuthScreenBody Heading = {'Contact Us'} Content = {<ContactUsForm />} />
            <Footer />
        </>
    )
}

export default ContactUs;