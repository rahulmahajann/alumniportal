// libraries import
import React from 'react';

// files import
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import UpperHeaderUserLog from '../../../PostLoginComponents/User/Header/UpperHeaderLog';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';

function Gallery(){
    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody Heading = {'Gallery'} />
            <Footer />
        </>
    )
}

export default Gallery;