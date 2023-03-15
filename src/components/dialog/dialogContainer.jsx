import Dialog from "./dialog";
import React from "react";
import { onSendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialog-reducer";
import { connect } from "react-redux";




let mapStoreToProps = (state) => {
    return {
        dialogPage:state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(onSendMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
    }
}
}
const DialogContainer = connect (mapStoreToProps,mapDispatchToProps)(Dialog);

export default DialogContainer;