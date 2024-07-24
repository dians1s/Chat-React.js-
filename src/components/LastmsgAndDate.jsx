import React from "react";

const LastmsgAndDate = ({ message }) => {
    const currentDateTime = new Date()
    const messageDateTime = new Date(message?.date)



    const isThisYear = () => {
        return (currentDateTime.getFullYear() === messageDateTime.getFullYear() ? true : messageDateTime.getFullYear())
    }

    const isToday = () => {
        return currentDateTime.toDateString() === messageDateTime.toDateString()
    }

    const formatDate = (dated) => {
        const day = String(dated.getDate()).padStart(2, '0')
        const month = String(dated.getDate()).padStart(2, '0')
        return `${day}.${month}`
    }

    const checkDate = () => {
        if (message?.date) {
            if (isThisYear() && isToday()) return messageDateTime.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' })
            else return `${formatDate(messageDateTime)}.${messageDateTime.getFullYear()}`
        }
        else {
            return '--:--'
        }

    }

    return (
        <div className="App__ChatMenu__ChatLists__PersonInChatLists__PersonNameAndMessageInChatLists__LastmsgAndDate">
            <h3 className="App__ChatMenu__ChatLists__PersonInChatLists__PersonNameAndMessageInChatLists__LastmsgAndDate__PersonNameAndMessageInChatListsH3">{message?.content.length > 12 ? message?.content.slice(0, 13) + '...' : message?.content}</h3>
            <h3 className="App__ChatMenu__ChatLists__PersonInChatLists__PersonNameAndMessageInChatLists__LastmsgAndDate__PersonNameAndMessageInChatListsH3">{checkDate()}</h3>
        </div>
    )
}

export default LastmsgAndDate