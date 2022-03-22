
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

                    // <>
                    //     <h1>{item.userEmail}</h1>
                    //     <h1>{item.userName}</h1>
                    //     <h1>{item.userMobile}</h1>
                    //     <h1>{item.userGender}</h1>
                    //     <h1>{item.userDOB}</h1>
                    //     <h1>{item.userCity}</h1>
                    //     <h1>{item.userEnrollmentNumber}</h1>
                    //     <h1>{item.userBatch}</h1>
                    //     <h1>{item.userCourseAndBranch}</h1>
                    //     <br />
                    // </>
                ))
            }


        </div>
    )
}

export default ApprovedMembersList;