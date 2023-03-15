

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={profilePage: {
    posts: [
        { id: 1, message: 'hi', likeCount: 27 },
        { id: 2, message: 'The weather amazing today', likeCount: 67 },
        { id: 3, message: 'What is  new?', likeCount: 34 },
        { id: 4, message: 'Good luck everyone!))', likeCount: 29 }

    ],
    newPostText: 'new post text'
}}

const profileReducer = (state=initialState, action) => {
switch(action.type){
    case ADD_POST:{
       let addNewPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
};
let stateCopy={...state};
stateCopy.post=[...state.post];
stateCopy.posts.push(addNewPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:{
        let stateCopy={...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
        default:{
            return state;
        }
        
}
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;