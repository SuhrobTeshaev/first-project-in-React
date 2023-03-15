
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState={dialogPage: {
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
    newMessageText: ''

}}
const dialogReducer = (state=initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:{
            let newSendMessage = {
                id: 8,
                message: state.newMessageText
            };
            let stateCopy={...state};
            stateCopy.messages=[...state.message];
            stateCopy.messages.push(newSendMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy={...state};
            stateCopy.newMessageText = action.newMessage
            return stateCopy;
        }
        default:
            return state;
    }
}


export const onSendMessageActionCreator = () => ({ type: SEND_MESSAGE })


export const updateNewMessageTextActionCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

export default dialogReducer;