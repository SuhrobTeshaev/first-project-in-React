import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC,  unfollowAC }  from "../../redux/users-reducer";
import Users from "./users";

let mapStoreToProps = (state) => {
    return { 
        users:state.usersPage.users
     } 
}
let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
    },
        setUsers:(users) => {
            dispatch(setUsersAC(users));
        }
}
}
const UsersContainer = connect (mapStoreToProps,mapDispatchToProps)(Users);

export default UsersContainer;