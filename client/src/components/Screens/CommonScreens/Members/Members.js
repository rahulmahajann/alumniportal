// libraries import
import React from 'react';

// files import
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import Footer from '../../../CommonComponents/Footer/Footer';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderUserLog from '../../../PostLoginComponents/User/Header/UpperHeaderLog';
import ApprovedMembersList from '../../PostLoginScreens/Admin/Members/ApprovedMembersList';

function Members(){

    const memberMessage = 'Please login to view this page.';

    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody Heading = {'Members'} Content = {localStorage.getItem('token') ? <ApprovedMembersList /> : memberMessage} />
            <Footer />
        </>
    )
}

export default Members;