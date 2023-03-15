import React from 'react';
import classes from './post.module.css';


const Post = (props) => {
   
    return (
        <div className={classes.post}>
            <span>
                { props.message }
                </span>
                <span> like
                    {props.likeCount}
                </span>

        </div>
    )
}

export default Post;