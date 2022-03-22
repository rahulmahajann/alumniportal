import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { color1, color2 } from "../../../constants/colors";
import { getNewsroomData } from "../../../service/api";



function NewsroomList(){

    const [newsItems,setNewsItems]=useState([]);

    useEffect(async()=>{
        const newsroomData = await getNewsroomData();
        setNewsItems(newsroomData);
    },[]);

    const showNews = (e, news) => {
        console.log(news);
    }

    const newsContainer = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
        margin:'10px 2px',
        borderBottom:`1px solid ${color2}`,
        textDecoration: 'none',
        color: 'inherit'
    }

    const image_style = {
        width:'100%',
        objectFit:'content',
        height:'100%',
    }

    const image_container = {
        alignItems:'center',
        alignSelf:'center',
    }

    const content_style = {

    }

    const date_style = {
        fontSize:'25px'
    }

    return(
        <div>
            {
                newsItems.map((news,ind)=>{
                    return(
                        <Link to = {`/detailednews/${news._id}`} key={ind} style={newsContainer}>                        
                            <h1>{news.title}</h1>
                            <div style={image_container}>
                                <img style={image_style} src={news.img} alt='No image'></img>
                            </div>
                            <div style = {date_style}>Posted On: {(new Date(news.createdAt)).toLocaleDateString()}</div>
                            <div style = {content_style}>{news.content.length>220?news.content.substring(0,220)+` .....`:news.content}</div>
                        </Link>
                    )

                })
            }
        </div>
    )
}

export default NewsroomList;