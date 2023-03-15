import React from "react";
import classes from './dialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={classes.user}>
            {props.dialog}
        </div>
    )
}

export default DialogItem;