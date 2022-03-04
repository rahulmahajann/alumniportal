// libraries import
import React from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';


function NewsRoom(){
    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody
                Heading = {'Newsroom'}
            />
            <Footer />
        </>
    )
}

export default NewsRoom;