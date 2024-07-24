import React from "react";
import PersonInChatLists from './PersonInChatLists'


const ChatLists = ({ chats, messages, activeChat, setActiveChat }) => {

    const checkActiveChat = () => {
        const message = messages.findLast((el) => (el.from || el.to) === activeChat?.id)
        return activeChat === null ? null : <PersonInChatLists person={activeChat} message={message} activeChat={activeChat} setActiveChat={setActiveChat} />
    }

    const getLastMessageDate = (id) => {
        const message = messages.filter((el) => el.from === id || el.to === id).sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        return message ? new Date(message.date) : new Date(0)
    }

    return (
        <div className="App__ChatMenu__ChatLists">
            {checkActiveChat()}
            {chats
                .filter((checkPerson) => checkPerson.id !== activeChat?.id)
                .sort((a, b) => getLastMessageDate(b.id) - getLastMessageDate(a.id))
                .map((person) => {
                    const message = messages.findLast((el) => (el.from || el.to) === person.id)
                    return <PersonInChatLists person={person} message={message} key={person.id} setActiveChat={setActiveChat} />
                })}
        </div>
    )
}


export default ChatLists