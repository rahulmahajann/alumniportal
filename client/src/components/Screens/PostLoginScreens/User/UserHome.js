import React from "react";
import NormalScreenBody from "../../../CommonComponents/Body/NormalScreenBody";
import Footer from "../../../CommonComponents/Footer/Footer";
import LowerHeader from "../../../CommonComponents/Header/LowerHeader";
import { college__logo } from "../../../constants/images";
import UpperHeaderUserLog from "../../../PostLoginComponents/User/Header/UpperHeaderLog";

function UserHome() {
    return (
        <>
            <UpperHeaderUserLog image = {college__logo} />
            <LowerHeader />
            <NormalScreenBody Heading = 'user home page' Content = 'this is user home page' />
            <Footer />
        </>
    )
}

export default UserHome;