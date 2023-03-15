import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";



const mapStoreToProps=  (state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return   {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
            onPostChange: (text) => {
                let action = updateNewPostTextActionCreator(text);
            dispatch(action);
    }
}
}

const MyPostContainer = connect (mapStoreToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;