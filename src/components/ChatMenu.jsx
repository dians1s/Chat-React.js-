import React from 'react'
import ChatLists from './ChatLists'
import CreateChatButton from './UI/button/CreateChatButton';

const ChatMenu = ({ chats, messages, activeChat, setActiveChat, setChats, contacts }) => {
    return (<div className='App__ChatMenu'>
        <CreateChatButton chats={chats} setChats={setChats} contacts={contacts} setActiveChat={setActiveChat} />
        <ChatLists chats={chats} messages={messages} activeChat={activeChat} setActiveChat={setActiveChat} />
    </div>
    )
}


export default ChatMenu