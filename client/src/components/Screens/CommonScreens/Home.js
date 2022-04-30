import React from 'react';
import Footer from '../../CommonComponents/Footer/Footer';
import { college__logo } from '../../constants/images';
import LowerHeader from '../../CommonComponents/Header/LowerHeader';
import UpperHeader from '../../PreLoginComponents/Header/UpperHeader';
import NormalScreenBody from '../../CommonComponents/Body/NormalScreenBody';
import UpperHeaderLog from '../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderUserLog from '../../PostLoginComponents/User/Header/UpperHeaderLog';

function Home(){
    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody
                Heading = {'Home'}
                Content = {'this is home page read along to know more'}
            />
            <Footer />
        </>
    )   
}

export default Home;