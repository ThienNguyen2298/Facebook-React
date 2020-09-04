import React, {useState, useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import { db } from '../../firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => 
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        )
    }, [])
    console.log(posts);
    return (
        
        <div className="feed">
            <StoryReel></StoryReel>
            <MessageSender></MessageSender>
            {
                posts.map(ele => (
                    <Post
                        key={ele.id}
                        profilePic={ele.data.profilePic}
                        message={ele.data.message}
                        timestamp={ele.data.timestamp}
                        username={ele.data.username}
                        image={ele.data.image}
                    ></Post>
                ))
            
            }
            
        </div>
    )
}

export default Feed
