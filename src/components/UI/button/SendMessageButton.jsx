import React from "react";
import classes from './SendMessageButton.module.css'
import { IoSend } from "react-icons/io5";


const SendMessageButton = ({ inputMessage, SendMessage, setInputMessage, updateChatLastMsg }) => {

    const SendingMessage = () => {
        if (inputMessage) {
            SendMessage(inputMessage)
            updateChatLastMsg(inputMessage)
            setInputMessage('')
        }
    }

    return (
        <IoSend classes={classes.SendMessageButton} onClick={(e) => SendingMessage()} />
    )
}

export default SendMessageButton