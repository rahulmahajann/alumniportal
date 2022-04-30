import React from "react";
import NormalScreenBody from "../../../CommonComponents/Body/NormalScreenBody";
import Footer from "../../../CommonComponents/Footer/Footer";
import LowerHeader from "../../../CommonComponents/Header/LowerHeader";
import { college__logo } from "../../../constants/images";
import LowerHeaderAdmin from "../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin";
import UpperHeaderAdminProfileLog from "../../../PostLoginComponents/Admin/Header/UpperHeaderAdminProfileLog";

function AdminProfile(){
    return(
        <>
        <UpperHeaderAdminProfileLog image = {college__logo} />
        {
                localStorage.getItem('email') ? <LowerHeaderAdmin /> : <LowerHeader />
        }
        <NormalScreenBody Heading = 'This is Admin Profile' Content = 'welcome to your profile admins' />
        <Footer/>
            {/* <h1>
                this is admin profile
            </h1> */}
        </>
    )
}

export default AdminProfile;