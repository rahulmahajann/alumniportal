import React, { useEffect, useState } from 'react';
import NormalScreenBody from '../../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../../CommonComponents/Footer/Footer';
import { college__logo } from '../../../../constants/images';
import LowerHeaderAdmin from '../../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import { getPendingMembers, searchPendingMembers } from '../../../../service/api';
import PendingMembersList from './PendingMembersList';

function PendingMembers(){


    const intialFilters={
        batch:'',
        courseAndBranch:'',
        name:''
    }

    const [filteredMembers,setFilteredMembers]=useState();
    const [filters,setFilters]=useState(intialFilters);

    useEffect(async()=>{
        const membersResponse = await getPendingMembers();
        setFilteredMembers(membersResponse);
    },[]);

    function handleChange(e){
        setFilters({
            ...filters,
            [e.target.name]:e.target.value,
        });

        console.log(filters);
    }
    

    async function handleSearch(e){
        e.preventDefault();
        console.log(filters);
        const filteredMembersResponse = await searchPendingMembers(filters); 
        console.log(filteredMembersResponse.data);
        setFilteredMembers(filteredMembersResponse.data);

    }

    const search_container={
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        margin:'10px 5px 20px 5px',
    }

    return(
        <>
            <UpperHeaderLog image = {college__logo} />
            <LowerHeaderAdmin />
            <NormalScreenBody 
            
                Heading = {'Pending Members'}
                Content = {[
                    "Select Filters",
                            <div style={search_container}>
                                <input type="number" placeholder="Batch" min="2012" max="2023" value={filters.batch} name="batch" onChange={(e)=>handleChange(e)}></input>
                                <input type="text" placeholder="Name" value={filters.name} name="name" onChange={(e)=>handleChange(e)}></input>
                                <select name="courseAndBranch"  onChange = { (e) => handleChange(e) }  default="">
                                    <option value="">Select</option>
                                    <option value="B.Tech(CSE)">B.Tech(CSE)</option>
                                    <option value="B.Tech(IT)">B.Tech(IT)</option>
                                    <option value="B.Tech(ECE)">B.Tech(ECE)</option>
                                    <option value="B.Tech(EEE)">B.Tech(EEE)</option>
                                    <option value="B.Tech(MAE)">B.Tech(MAE)</option>
                                    <option value="B.Tech(Civil)">B.Tech(Civil)</option>
                                    <option value="BBA">BBA</option>
                                    <option value="MBA">MBA</option>
                                </select>
                                <button onClick={(e)=>handleSearch(e)}>Search</button>
                            </div>,
                            <PendingMembersList members={filteredMembers}/>]}
            />
            <Footer />
        </>
    )
}

export default PendingMembers;