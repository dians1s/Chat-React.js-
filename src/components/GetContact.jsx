import React from "react";
import ContactIcon from "./ContactIcon";
import ContactFullname from "./ContactFullname";

const GetContact = ({ chats, setChats, contact, setActiveChat, closeModal }) => {

    const OpenChat = (contact) => {
        if (!chats.find((person) => person.id === contact.id)) { setChats([...chats, contact]) }
        setActiveChat(contact)
        closeModal()
    }

    return (
        <div onClick={() => OpenChat(contact)} className="App__ChatMenu__CreateChatButton__Contacts__Contact">
            <ContactIcon contact={contact} />
            <ContactFullname contact={contact} />
        </div>
    )
}

export default GetContact