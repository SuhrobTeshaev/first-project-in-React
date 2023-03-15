import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let store = {
    _state: {
        dialogPage: {
            dialogs: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Misha' },
                { id: 3, name: 'Alex' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Dima' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how are you?' },
                { id: 3, message: 'What is new?' },
                { id: 4, message: 'What do you doing?' },
                { id: 5, message: 'ok' }
            ],
            newMessageText: 'new text'

        },
        profilePage: {
            posts: [
                { id: 1, message: 'hi', likeCount: 27 },
                { id: 2, message: 'The weather amazing today', likeCount: 67 },
                { id: 3, message: 'What is  new?', likeCount: 34 },
                { id: 4, message: 'Good luck everyone!))', likeCount: 29 }

            ],
            newPostText: 'new post text'
        },
        usersPage:{
          users: [ {
                id:1,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iB0NZdJqPWRrsy8qHVqTOfNAR152AR__2w&usqp=CAU',
                follow:true,
                fullName:'Sasha',
                status:'I am boss',
                location:{country:'China', city:'Bejing'}
            },
             {
                id:1,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iB0NZdJqPWRrsy8qHVqTOfNAR152AR__2w&usqp=CAU',
                followed:true,
                fullName:'Sasha',
                status:'I am boss',
                location:{country:'China', city:'bejing'}
            },
            {
                id:1,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iB0NZdJqPWRrsy8qHVqTOfNAR152AR__2w&usqp=CAU',
                followed:false,
                fullName:'Sasha',
                status:'I am boss',
                location:{country:'China', city:'bejing'}
            },
            {
                id:1,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iB0NZdJqPWRrsy8qHVqTOfNAR152AR__2w&usqp=CAU',
                followed:true,
                fullName:'Sasha',
                status:'I am boss',
                location:{country:'China', city:'bejing'}
            }
        ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    _rerenderEntireTree() {

    },
    dispatch(action) { 
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.usersPage = usersReducer(this._state.usersPage, action);
        this._rerenderEntireTree(this._state);

    }
}



window.state = store;
export default store;