// libraries import
import React from 'react';

// files import
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import Footer from '../../../CommonComponents/Footer/Footer';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderUserLog from '../../../PostLoginComponents/User/Header/UpperHeaderLog';
let loadingGif = require('../../../../giphy1.gif')

function Events(){
    return(
        <>
            {/* <img  /> */}
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            {/* <img src = {loadingGif} /> */}

            <NormalScreenBody Heading = 'Events' Content = {<img src = {loadingGif} />} />
            <Footer />
        </>
    )
}

export default Events;