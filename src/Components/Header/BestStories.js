import React , { useEffect, useState }from "react";
import axios from 'axios';

const BestStories = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty').then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });

    });
    const postList = (post.length) ? post.map((info) => {
        return (
            <React.Fragment>
                <p>{info}</p>               
            </React.Fragment>
        )
    }) : <p>No Data Yet!</p>
    return(
        <React.Fragment>           
            Best stories
            {postList}
        </React.Fragment>
    )
}



export default BestStories;