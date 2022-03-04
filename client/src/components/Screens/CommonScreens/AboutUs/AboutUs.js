// libraries import
import React from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import { college__logo } from '../../../constants/images';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';

function AboutUs(){

    return(
        <>  
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : <UpperHeader image = { college__logo } />
            }

            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            
            <NormalScreenBody 
                Heading = {'About Us'}
            />
            <Footer />
        </>
    )
}

export default AboutUs;