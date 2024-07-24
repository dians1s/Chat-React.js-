import React from "react";
import classes from './MessageInput.module.css'


const MessageInput = ({ inputMessage, setInputMessage }) => {
    return (<input className={classes.MessageInput} value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Write message..." />
    )
}

export default MessageInput