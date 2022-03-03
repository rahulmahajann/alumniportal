// libraries import
import React from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';


function NewsRoom(){
    return(
        <>
            <UpperHeader image = { college__logo } />
            <LowerHeader />
            <NormalScreenBody
                Heading = {'Newsroom'}
            />
            <Footer />
        </>
    )
}

export default NewsRoom;