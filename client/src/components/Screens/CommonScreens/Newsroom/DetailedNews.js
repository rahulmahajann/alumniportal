import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NormalScreenBody from '../../../CommonComponents/Body/NormalScreenBody';
import Footer from '../../../CommonComponents/Footer/Footer';
import LowerHeader from '../../../CommonComponents/Header/LowerHeader';
import { college__logo } from '../../../constants/images';
import LowerHeaderAdmin from '../../../PostLoginComponents/Admin/Header/LowerHeaderAdmin';
import UpperHeaderLog from '../../../PostLoginComponents/Admin/Header/UpperHeaderLog';
import UpperHeaderUserLog from '../../../PostLoginComponents/User/Header/UpperHeaderLog';
import UpperHeader from '../../../PreLoginComponents/Header/UpperHeader';
import { getNewsById } from '../../../service/api';
import DetailedNewsItem from './DetailedNewsItem';

function DetailedNews(){

    const [newsDetailById, setNewsDetailById] = useState({});
    const id = useParams().id;
    console.log(id);

    useEffect(async () => {
        const apiInformation = await getNewsById(id);
        // console.log(apiInformation);
        setNewsDetailById({
            ...apiInformation
        })
    }, []);

    // console.log(newsDetailById);

    return(
        <>
            {
                localStorage.getItem('email') ? <UpperHeaderLog image = { college__logo } /> : localStorage.getItem('userEmail') ? <UpperHeaderUserLog image = {college__logo} /> : <UpperHeader image = { college__logo } />
            }
            {
                localStorage.getItem('isAdmin') ? <LowerHeaderAdmin /> : <LowerHeader />
            }
            <NormalScreenBody
                Heading = {newsDetailById.title}
                Content={<DetailedNewsItem newsDetail = {newsDetailById} />}
                
            />
            <Footer />
        </>
    )
}

export default DetailedNews;