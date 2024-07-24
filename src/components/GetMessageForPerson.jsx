import React, { useEffect, useRef } from "react";
import GiveMessageForPerson from "./GiveMessageForPerson";

const GetMessageForPerson = ({ activeChat, messages }) => {

    const filteredMessages = messages
        .filter((message) => (message?.to === 0 && message?.from === activeChat.id) || (message?.to === activeChat.id && message?.from === 0))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeChat, messages]);

    return (
        <div className="App__Chat__Messages__GetMessageForPerson">

            {filteredMessages.map((message, index) => {
                const isLastMessage = index === 0
                return <GiveMessageForPerson message={message} key={message?.id} isLastMessage={isLastMessage} />
            })}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default GetMessageForPerson