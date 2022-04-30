import React from "react";
import NormalScreenBody from "../../../CommonComponents/Body/NormalScreenBody";
import Footer from "../../../CommonComponents/Footer/Footer";
import LowerHeader from "../../../CommonComponents/Header/LowerHeader";
import { college__logo } from "../../../constants/images";
import UpperHeaderUserProfileLog from "../../../PostLoginComponents/User/Header/UpperHeaderUserProfileLog";

function UserProfile() {
    return (
        <>
            <UpperHeaderUserProfileLog image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody Heading = 'This is User Profile' Content = 'welcome user to your profile' />
            <Footer />
        </>
    )
}

export default UserProfile;