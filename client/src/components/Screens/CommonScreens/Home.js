import React from 'react';
import Footer from '../../CommonComponents/Footer/Footer';
import { college__logo } from '../../constants/images';
import LowerHeader from '../../CommonComponents/Header/LowerHeader';
import UpperHeader from '../../PreLoginComponents/Header/UpperHeader';
import NormalScreenBody from '../../CommonComponents/Body/NormalScreenBody';

function Home(){
    return(
        <>
            <UpperHeader image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody
                Heading = {'Home'}
                Content = {'bye'}
            />
            <Footer />
        </>
    )   
}

export default Home;