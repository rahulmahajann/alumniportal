import React from 'react';
import NormalScreenBody from '../../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../../CommonComponents/Footer/Footer';
import { college__logo } from '../../../../constants/images';
import LowerHeaderAdmin from '../../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import ApprovedMembersList from './ApprovedMembersList';

function ApprovedMembers(){
    return(
        <>
            <UpperHeaderLog image = {college__logo} />
            <LowerHeaderAdmin />
            <NormalScreenBody 
                Heading = {'Approved Members'}
                Content = {<ApprovedMembersList />}
            />
            <Footer />
        </>
    )
}

export default ApprovedMembers;