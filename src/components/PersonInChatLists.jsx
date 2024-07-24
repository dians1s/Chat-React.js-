import React from "react";
import PersonIconInChatLists from "./PersonIconInChatLists";
import PersonNameAndMessageInChatLists from "./PersonNameAndMessageInChatLists";


const PersonInChatLists = ({ person, message, activeChat, setActiveChat }) => {

    const activeChatStyle = () => {
        return person.id === activeChat?.id ? { backgroundColor: 'rgba(0, 0, 0, 0.2)' } : {}
    }

    return (<div onClick={(e) => setActiveChat(person)} className="App__ChatMenu__ChatLists__PersonInChatLists" style={activeChatStyle()}>
        <PersonIconInChatLists person={person} />
        <PersonNameAndMessageInChatLists person={person} message={message} />
    </div>
    )
}

export default PersonInChatLists