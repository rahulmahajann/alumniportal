
import React, { useEffect, useState } from "react";
import { getApprovedMembers } from "../../../../service/api";
import ContainerApproval from "./ReusableApproveUI/ContainerApproval";



function ApprovedMembersList(){

    const [approvedMembers,setApprovedMembers]=useState();


    useEffect(async()=>{

        const activeUsers=await getApprovedMembers();
        console.log(activeUsers);

        setApprovedMembers(activeUsers);

    },[]);


    return(
        <div>
            {
                approvedMembers && approvedMembers?.map((item, ind) => (
                    
                    <ContainerApproval userInfo = {item} />
                ))
            }


        </div>
    )
}

export default ApprovedMembersList;