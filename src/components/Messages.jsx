import React from "react";
import GetMessageForPerson from "./GetMessageForPerson";

const Messages = ({ activeChat, messages, setMessages }) => {

    const CheckActivePerson = () => {
        return activeChat === null ?
            <div className="App__Chat__MessagesNotFound">
                <h1 className="App__Chat__MessagesNotFound__PleaseSelectUserH1">Приветствуем Вас в мини веб-приложении</h1>
            </div>
            :
            <div className="App__Chat__Messages">
                <GetMessageForPerson activeChat={activeChat} messages={messages} />
            </div>

    }
    return (
        CheckActivePerson()
    )
}

export default Messages