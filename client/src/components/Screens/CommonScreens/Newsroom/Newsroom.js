// libraries import
import React, { useEffect, useState } from 'react';

// files import
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { college__logo } from '../../../constants/images';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import NewsroomList from './NewsroomList';
import UpperHeaderUserLog from '../../../PostLoginComponents/User/Header/UpperHeaderLog';


function NewsRoom(){

    const [searchQuery,setSearchQuery]=useState('');

    // async function searchHandler(e){
    //     e.preventDefault();

    // }

    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <div className='newsroom_container' style={{display:'flex', flexDirection:'row'}}>
                <NormalScreenBody
                    Heading = {'Newsroom'}
                    Content={<NewsroomList />}
                    SearchQuery={searchQuery}
                    
                />
                <div className='search_container'>
                    <input type="text" onChange={(e)=>{setSearchQuery(e.target.value)}}></input>
                    {/* <button onChange={(e)=>{searchHandler(e)}}>Search</button> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsRoom;