import React from "react";
import { color1, color2, color3, color4 } from "../../../constants/colors";


const containerStyle = {
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}
const imgStyle = {
    maxWidth:'100%',
    // border:`ridge ${color4} 0px`,
}


const dateStyle = {
    fontSize:'25px',
    fontWeight:'500',
    fontFamily:'Garamond, serif',
    // fontStyle:'italic'
}

const newsStyle = {
    fontSize:'18px',
    wordWrap:'break-word',
    width:'95%'
}

function DetailedNewsItem(props){
    const {newsDetail} = props;
    console.log(newsDetail.createdAt);
    return(
        // <h1>this is detailed news item page</h1>
        <div style={containerStyle}>
            {/* <img src = {newsDetail.img} alt = 'news Image'> */}
            <a  href = {newsDetail.img} target = "_blank" rel = "noopener noreferrer">
            <img style={imgStyle} src = {newsDetail.img} alt = 'news Image'>
            </img>
            </a>
            <p style={dateStyle}>Posted On: {new Date(newsDetail.createdAt).toLocaleDateString()}</p>
            <p style={newsStyle}>{newsDetail.content}</p>
        </div>
    )
}

export default DetailedNewsItem;