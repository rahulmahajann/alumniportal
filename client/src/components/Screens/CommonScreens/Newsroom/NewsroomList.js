import { useEffect, useState } from "react";
import { color1, color2 } from "../../../constants/colors";
import { getNewsroomData } from "../../../service/api";



function NewsroomList(){

    const [newsItems,setNewsItems]=useState([
        {
            title:"TEST TITLE 1",
            image:'https://vaave.s3.amazonaws.com/content/151600328_1641028376_NewYear2022_thumb.jpg',
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae sagittis magna. Quisque a nulla sem. Vestibulum hendrerit auctor risus vitae dictum. Maecenas sed ullamcorper massa. Vestibulum consequat felis mi, vitae porta eros placerat a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse lobortis id libero ac ultrices. Aliquam pharetra facilisis efficitur. Nulla fringilla pulvinar sapien, a bibendum magna mollis ac. Donec ac semper libero. Nullam luctus sit amet nulla id ultrices.Sed vitae elementum quam.Nullam feugiat tortor nisl, vel aliquet ante bibendum sit amet. Duis dignissim aliquet vestibulum. Vivamus quis justo eget ligula placerat pretium nec in urna. Aenean feugiat est sed tortor interdum, et consequat nibh vulputate. Ut laoreet vehicula elit, sed eleifend urna eleifend ac. Etiam nibh massa, feugiat ut leo et, ultricies aliquet turpis. Morbi sed pulvinar purus.",
            postedOn:new Date(),
        },
        {
            title:"TEST TITLE 2",
            image:'https://vaave.s3.amazonaws.com/content/151600328_1641028376_NewYear2022_thumb.jpg',
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae sagittis magna. Quisque a nulla sem. Vestibulum hendrerit auctor risus vitae dictum. Maecenas sed ullamcorper massa. Vestibulum consequat felis mi, vitae porta eros placerat a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse lobortis id libero ac ultrices. Aliquam pharetra facilisis efficitur. Nulla fringilla pulvinar sapien, a bibendum magna mollis ac. Donec ac semper libero. Nullam luctus sit amet nulla id ultrices.Sed vitae elementum quam.Nullam feugiat tortor nisl, vel aliquet ante bibendum sit amet. Duis dignissim aliquet vestibulum. Vivamus quis justo eget ligula placerat pretium nec in urna. Aenean feugiat est sed tortor interdum, et consequat nibh vulputate. Ut laoreet vehicula elit, sed eleifend urna eleifend ac. Etiam nibh massa, feugiat ut leo et, ultricies aliquet turpis. Morbi sed pulvinar purus.",
            postedOn:new Date(),

        }
    ]);

    useEffect(async()=>{
           
        //api call to newsroom
        const newsroomData = await getNewsroomData();

        // console.log(newsroomData);
        setNewsItems(newsroomData);


    },[]);

    const showNews = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const newsContainer = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
        margin:'10px 2px',
        borderBottom:`1px solid ${color2}`,

    }

    const image_style = {
        width:'100%',
        objectFit:'content',
        height:'100%',
        maxHeight:'500px'
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
                    {console.log(news)}
                    return(
                    <div  onClick={(e)=>{showNews(e)}} value={news._id} key={ind} style={newsContainer}>                        
                        <h1>{news.title}</h1>
                        <div style={image_container}>
                            <img style={image_style} src={news.img} alt='No image'></img>
                        </div>
                        <div style = {date_style}>Posted On: {(new Date(news.createdAt)).toLocaleDateString()}</div>
                        <div style = {content_style}>{news.content.length>220?news.content.substring(0,220)+` .....`:news.content}</div>
                        
                    </div>
                    )

                })
            }
        </div>
    )
}

export default NewsroomList;