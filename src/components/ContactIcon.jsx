import React from "react";

const ContactIcon = ({ contact }) => {

    return (
        <div className="App__ChatMenu__CreateChatButton__Contacts__Contact__Icon">
            <img src={contact.icon} alt={contact.fullname + ' Icon'} />
        </div>
    )
}

export default ContactIcon