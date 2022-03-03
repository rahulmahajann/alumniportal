import React from 'react';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import UserRegDetailsForm from './UserRegDetailsForm';

function UserRegDetails(){
    return(
        <>
            <UpperHeaderLog image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody
                Heading = {'Registration Details'}
                Content = {
                    <UserRegDetailsForm />
                }
            />
            <Footer />
        </>
    )
}

export default UserRegDetails;