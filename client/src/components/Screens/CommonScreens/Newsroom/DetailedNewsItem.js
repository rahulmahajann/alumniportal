import React from "react";

function DetailedNewsItem(props){
    const {newsDetail} = props;
    console.log(newsDetail.createdAt);
    return(
        // <h1>this is detailed news item page</h1>
        <>
            <img src = {newsDetail.img} alt = 'news Image' />
            <p>CreatedAt: {new Date(newsDetail.createdAt).toLocaleDateString()}</p>
            <p>{newsDetail.content}</p>
        </>
    )
}

export default DetailedNewsItem;