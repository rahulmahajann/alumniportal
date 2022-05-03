// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { color2, color7, color8,} from "../../../constants/colors";
// import { getNewsBySearch, getNewsroomData } from "../../../service/api";


function NewsroomList(props){
    
    const newsContainer = {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'left',
        justifyContent:'center',
        margin:'10px 2px',
        border:`1px solid ${color8}`,
        boxShadow:`2px 2px 2px 2px ${color7}`,
        // borderLeft:`1.5px solid ${color2}`,
        // border:`1.5px solid ${color2}`,
        textDecoration: 'none',
        color: 'inherit'
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
        borderTop:`0.5px solid ${color2}`,
        fontFace:'inter'

    }

    const date_style = {
        fontSize:'25px'
    }

    

    return(
        <div>
            {
                props?.data?.map((news,ind)=>{
                    // {console.log(news)}
                    return(
                        <Link to = {`/detailednews/${news._id}`} key={ind} style={newsContainer}>                        
                            <h1>{news.title}</h1>
                            <div style={image_container}>
                                <img style={image_style} src={news.img} alt='No image'></img>
                            </div>
                            <div style = {date_style}>Posted On: {(new Date(news.createdAt)).toLocaleDateString()}</div>
                            <div style = {content_style}>{news?.content?.length>220?news.content.substring(0,220)+` .....`:news.content}</div>
                        </Link>
                    )

                })
            }
            {/* <button style={loadMoreStyle} onClick={(e) => loadMoreNews(e) } disabled={!loadMoreEnable}>Load More News</button> */}
            {/* <div>
                {
                    Array(totalPage).fill(1).map((el,ind) =>{
                        return(<div>{ind}</div>)
                    })
                }
            </div> */}
        </div>
    )
}

export default NewsroomList;