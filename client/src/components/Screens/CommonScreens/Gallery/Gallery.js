// libraries import
import React from 'react';

// files import
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';

function Gallery(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody Heading = {'Gallery'} />
            <Footer />
        </>
    )
}

export default Gallery;