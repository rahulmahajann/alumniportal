import React from "react";

function DetailedNewsItem(props){
    const {newsDetail} = props;
    return(
        // <h1>this is detailed news item page</h1>
        <>
            <img src = {newsDetail.img} alt = 'news Image' />
            <p>CreatedAt: {newsDetail.createdAt.slice(0,10)}</p>
            <p>{newsDetail.content}</p>
        </>
    )
}

export default DetailedNewsItem;