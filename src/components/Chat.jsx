import React from "react";
import TopContact from "./TopContact";
import Messages from "./Messages";
import InputMessage from "./InputMessage";

const Chat = ({ activeChat, messages, SendMessage, updateChatLastMsg }) => {
    return (
        <div className="App__Chat">
            <TopContact activeChat={activeChat} />
            <Messages activeChat={activeChat} messages={messages} />
            <InputMessage SendMessage={SendMessage} updateChatLastMsg={updateChatLastMsg} activeChat={activeChat} />
        </div>
    )
}

export default Chat