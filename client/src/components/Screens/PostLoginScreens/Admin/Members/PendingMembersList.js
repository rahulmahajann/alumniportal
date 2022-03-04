import React, { useEffect, useState } from "react";
import { deletePendingMember, getPendingMembers, updatePendingMember } from "../../../../service/api";

function PendingMembersList(){
    
    const [pendingMembers, setPendingMembers] = useState('');
    const [renderSwitch,setRenderSwitch]=useState(false);


    useEffect(async () => {
        const temp = await getPendingMembers();
        // console.log(temp);
        setPendingMembers(temp)
    }, [renderSwitch]);

    // console.log(pendingMembers);


    const approveMember = async (e, userId) => {
        e.preventDefault();
        const temp = await updatePendingMember(userId);
        console.log("valid");
        setRenderSwitch(!renderSwitch);
    }

    const deleteMember = async (e,userId)=>{
        // e.preventDefault();
        const temp = await deletePendingMember(userId);
        console.log("delete",temp);
        setRenderSwitch(!renderSwitch);
    }
    
    return(
        <>
            {
                pendingMembers && pendingMembers?.map((item, ind) => (
                    <>
                        <h1>{item.userEmail}</h1>
                        <h1>{item.userName}</h1>
                        <h1>{item.userMobile}</h1>
                        <h1>{item.userDOB}</h1>
                        <h1>{item.userCity}</h1>
                        <button onClick = {(e) => approveMember(e, item._id)} >Approve</button>
                        <button onClick = {(e) => deleteMember(e,item._id)} >Decline</button>
                        <br />
                    </>
                ))
            }
        </>
    )   
}

export default PendingMembersList;