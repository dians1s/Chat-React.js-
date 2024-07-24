import React from "react";
import LastmsgAndDate from "./LastmsgAndDate";

const PersonNameAndMessageInChatLists = ({ person, message }) => {
    return (
        <div className="App__ChatMenu__ChatLists__PersonInChatLists__PersonNameAndMessageInChatLists">
            <h2 className="App__ChatMenu__ChatLists__PersonInChatLists__PersonNameAndMessageInChatLists__PersonNameAndMessageInChatListsH2">{person.fullname}</h2>
            <LastmsgAndDate message={message} />
        </div>
    )
}

export default PersonNameAndMessageInChatLists