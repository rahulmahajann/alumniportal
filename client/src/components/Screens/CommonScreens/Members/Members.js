// libraries import
import React from 'react';

// files import
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import Footer from '../../../CommonComponents/Footer/Footer';

function Members(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody Heading = {'Members'} />
            <Footer />
        </>
    )
}

export default Members;