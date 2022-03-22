import React from 'react';
import NormalScreenBody from '../../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../../constants/images';
import LowerHeaderAdmin from '../../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import UpperHeader from '../../../../PreLoginComponents/Header/UpperHeader';
import ContactUsAdminItems from './ContactUsAdminItems';

function ContactUsAdmin(){
    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody
                Heading = {'contact Us'}
                Content={<ContactUsAdminItems />}
                
            />
            <Footer />
        </>
    )   
}

export default ContactUsAdmin;