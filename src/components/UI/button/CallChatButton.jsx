import React from "react";
import classes from './CallChatButton.module.css'
import { IoCall } from "react-icons/io5";


const CallChatButton = () => {
    return (<div className="CallChatButton">
        <IoCall className={classes.CallChatButton} />
    </div>
    )
}

export default CallChatButton