import React, { useEffect, useState } from "react";
import { deletePendingMember, getPendingMembers, updatePendingMember } from "../../../../service/api";
import ContainerApproval from "./ReusableApproveUI/ContainerApproval";

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

    const mainComponent = {
        display: 'flex',
        flexDirection: 'column', 
    }
    
    const buttons__PendingMembersList = {
        border: 'none'
    }

    const div__buttons = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <div>
            {
                pendingMembers && pendingMembers?.map((item, ind) => (
                    <div  style = {mainComponent} >
                        <ContainerApproval userInfo = {item} />
                        <div style = {div__buttons} >
                            <button style = {buttons__PendingMembersList} onClick = {(e) => approveMember(e, item._id)} >Approve</button>
                            <button style = {buttons__PendingMembersList} onClick = {(e) => deleteMember(e,item._id)} >Decline</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )   
}

export default PendingMembersList;