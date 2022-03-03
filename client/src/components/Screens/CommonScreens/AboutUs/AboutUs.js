// libraries import
import React from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import { college__logo } from '../../../constants/images';

function AboutUs(){

    return(
        <>
            <UpperHeader image = { college__logo } />
            <LowerHeader />
            <NormalScreenBody 
                Heading = {'About Us'}
            />
            <Footer />
        </>
    )
}

export default AboutUs;