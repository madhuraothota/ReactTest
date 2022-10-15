import React, { useEffect, useState } from "react";
import axios from 'axios';

const TopStories = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });

    },[]);

    const postList = (post.length) ? post.map((info) => {
        return (
            <React.Fragment>
                <p>{info}</p>
               
            </React.Fragment>
        )
    }) : <p>No Data Yet!</p>
    return (
        <React.Fragment>
            {postList}
        </React.Fragment>
    )
}



export default TopStories;