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
import { getNewsBySearch, getNewsroomData } from '../../../service/api';
import { color2 } from '../../../constants/colors';


function NewsRoom(){

    const [searchQuery,setSearchQuery]=useState('');
    const [realSearchQuery,setRealSearchQuery]=useState('');
    const [newsroomData,setNewsroomData]=useState([]);
    const [pageNumber,setPageNumber]=useState(0);
    const [loadMoreEnable,setLoadMoreEnable]=useState(true);
    const [search,setSearch]=useState(true);
    // console.log(searchQuery);

    useEffect(async()=>{

        if(!searchQuery){
            const data = await getNewsroomData(pageNumber);
            console.log(data.data);
            if(data.remainingNewsCount<=0){
                setLoadMoreEnable(false);
            }
            setNewsroomData(newsroomData.concat(data.data));
        }
        else{
            const data = await getNewsBySearch({newsTitle:realSearchQuery,pageNumber:pageNumber});
            console.log(data.data);
            if(data.remainingNewsCount <= 0){
                setLoadMoreEnable(false);
            }
            setNewsroomData(newsroomData.concat(data.data));
        }
    },[pageNumber,search]);

    function loadMoreHandler(e){
        e.preventDefault();

        setPageNumber(pageNumber+1);
    }
    async function searchHandler(e){

        e.preventDefault();
        console.log("click");

        setRealSearchQuery(searchQuery);
        setNewsroomData([]);
        setSearch(!search);
        setPageNumber(0);
        setLoadMoreEnable(true);
    }

    const loadMoreStyle = {
        height: '45px', 
        marginBottom: '10px',
        marginLeft:'25%',
        width:'50%',
        background: color2,
        borderRadius: '5px',
        border: 'none',
        fontSize:'20px',
    }

    const search_container_Style={
        marginLeft:'50%',
        // marginRight:"1px",
        // width:'100%',
        height:'10%',
        // background:'#F6F6F6',
        borderBottom:`1px solid ${color2}`,
    }
    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            {/* <div className='newsroom_container' style={{display:'flex', flexDirection:'row'}}> */}
                <NormalScreenBody
                    Heading = {'Newsroom'}
                    // Content={!realSearchQuery?<NewsroomList/>:<NewsroomSearchList searchQuery={realSearchQuery} />}
                    Content = {[
                    <div style={search_container_Style} className='search_container'>
                        <input placeholder="Type here to search" style={{marginRight:'2.5%',width:'70%'}}type="text" onChange={(e)=>{setSearchQuery(e.target.value)}}></input>
                        <button style={{marginLeft:'2.5%',width:'25%'}}onClick={(e)=>{searchHandler(e)}}>Search</button>
                    </div>,     
                    <NewsroomList data={newsroomData} />,
                    <button style={loadMoreStyle}  disabled={!loadMoreEnable} onClick={(e)=>{loadMoreHandler(e)}}>Load More</button>
                ]

                }>       
                </ NormalScreenBody>

                
            {/* </div> */}
                

            <Footer />
        </>
    )
}

export default NewsRoom;