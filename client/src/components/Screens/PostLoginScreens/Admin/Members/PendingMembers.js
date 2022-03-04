import React from 'react';
import NormalScreenBody from '../../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../../CommonComponents/Footer/Footer';
import { college__logo } from '../../../../constants/images';
import LowerHeaderAdmin from '../../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import PendingMembersList from './PendingMembersList';

function PendingMembers(){
    return(
        <>
            <UpperHeaderLog image = {college__logo} />
            <LowerHeaderAdmin />
            <NormalScreenBody 
                Heading = {'Pending Members'}
                Content = {<PendingMembersList />}
            />
            <Footer />
        </>
    )
}

export default PendingMembers;