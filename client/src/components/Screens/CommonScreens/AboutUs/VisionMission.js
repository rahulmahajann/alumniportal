// libraries import
import React from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import { visionNmission } from '../../../constants/strings';
import Footer from '../../../CommonComponents/Footer/Footer';

function VissionMission(){
    return(
        <>
            <UpperHeader image = { college__logo } />
            <LowerHeader />
            <NormalScreenBody 
                Heading = {'Vission & Mission'}
                Content = { visionNmission }
            />
            <Footer />
        </>
    )
}

export default VissionMission;