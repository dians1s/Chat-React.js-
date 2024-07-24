import React from "react";

const PersonIconInChatLists = ({ person }) => {
    return (
        <div className="App__ChatMenu__ChatLists__PersonInChatLists__PersonIconInChatLists">
            <img src={person.icon} alt={person.fullname + ' Icon'} />
        </div>
    )
}

export default PersonIconInChatLists