import React from 'react';
import classes from './myPosts.module.css';
import Post from './post/post';


const MyPosts = (props) => {
    

    let postElements=
    props.posts.map(p => <Post message={p.message}  likeCount={p.likeCount}/>)

    let newPostElements=React.createRef();
    

let onAddPost = ()=>{ 
props.addPost();
}

let onUpdatePostChange = (e)=>{
    let text = newPostElements.current.value; 
    props.onPostChange(text);
}
    return (
        <div className={classes.my_posts}>
            <div className={classes.profile_img}>
                <img src="https://avatars.mds.yandex.net/i?id=e61e7ed8ee0a765cb3072cdf971f578e3f252f8c-7764851-images-thumbs&n=13" alt="" />
            </div>
            <div>
            <input onChange={onUpdatePostChange} ref={newPostElements}  value={props.newPostText}/>
            <button onClick={onAddPost}>send</button>
            {postElements}
            
            </div>
        </div>
    )
}

export default MyPosts;