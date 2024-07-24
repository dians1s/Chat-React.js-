import React from "react";
import GetContact from "./GetContact";

const Contacts = ({ chats, setChats, contacts, setActiveChat, closeModal }) => {

    return (
        <div className="App__ChatMenu__CreateChatButton__Contacts">
            {
                contacts.map((contact) => <GetContact key={contact.id} chats={chats} setChats={setChats} contact={contact} setActiveChat={setActiveChat} closeModal={closeModal} />)
            }
        </div>
    )
}

export default Contacts