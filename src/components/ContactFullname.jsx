import React from "react";

const ContactFullname = ({ contact }) => {

    return (
        <div className="App__ChatMenu__CreateChatButton__Contacts__Contact_Name">
            <h2 className="App__ChatMenu__CreateChatButton__Contacts__Contact_Name_H2">{contact.fullname}</h2>
        </div>
    )
}

export default ContactFullname