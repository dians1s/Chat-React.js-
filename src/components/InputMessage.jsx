import React, { useState } from "react";
import MessageInput from "./UI/input/MessageInput";
import SendMessageButton from './UI/button/SendMessageButton'

const InputMessage = ({ SendMessage, updateChatLastMsg, activeChat }) => {

    const [inputMessage, setInputMessage] = useState('')
    return activeChat?.id ?
        <div className="App__Chat__InputMessage">
            <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} />
            <SendMessageButton inputMessage={inputMessage} SendMessage={SendMessage} setInputMessage={setInputMessage} updateChatLastMsg={updateChatLastMsg} />
        </div>
        :
        <div className="App__Chat__InputMessage"></div>
}

export default InputMessage