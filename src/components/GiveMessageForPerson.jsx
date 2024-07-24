import React from "react";

const GiveMessageForPerson = ({ message, isLastMessage }) => {

    return (
        <div className={`App__Chat__Messages__GetMessageForPerson__Message${message?.to === 0 ? 'ForPerson' : 'FromPerson'} ${isLastMessage ? 'LastMessage' : ''}`}>
            {message.content}
        </div>
    )
}

export default GiveMessageForPerson