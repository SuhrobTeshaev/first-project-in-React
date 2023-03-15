import React from "react";
import Message from "./messages/message";
import DialogItem from "./dialogItem/dialogItem";
import classes from './dialog.module.css';

const Dialog = (props) => {
    let state = props.dialogPage;


    let dialogsElements =
        state.dialogs.map(d => <DialogItem dialog={d.name}  id={d.id}/>);

    let messageElements =
        state.messages.map(m => <Message message={m.message}  id={m.id}/>);
    let newMessageText = state.newMessageText; 

    let onSendMessageClick = () => {
        props.sendMessage();

    }
    let messageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text); 
    }

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogs}>{dialogsElements}</div>
            <div className={classes.messages}>
                {messageElements}
                <textarea 
                onChange={messageChange} 
                 value={newMessageText} ></textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    )
}


export default Dialog;