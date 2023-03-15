import React from 'react';
import MyPostContainer from './myPosts/myPostContainer';
import classes from './profile.module.css';

const Profile = (props) => {
    
    return (
        <div className={classes.profile}>
            <MyPostContainer
            store={props.store}
            />
        </div>
    )
}

export default Profile;