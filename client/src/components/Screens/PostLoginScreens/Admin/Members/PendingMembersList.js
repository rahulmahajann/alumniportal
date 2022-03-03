import React, { useEffect } from "react";
import { getPendingMembers } from "../../../../service/api";

function PendingMembersList(){
    
    useEffect(async () => {
        const temp = await getPendingMembers();
    }, [])

    return(
        <h1>hello</h1>
    )   
}

export default PendingMembersList;