import React from "react";
import PersonIconAndNameInTopContact from "./PersonIconAndNameInTopContact";
import PersonIconsCallVideoLike from "./PersonIconsCallVideoLike";

const TopContact = ({ activeChat }) => {
    const CheckActivePerson = () => {
        return activeChat === null ?
            <div className="App__Chat__TopContact"></div>
            :
            <div className="App__Chat__TopContact">
                <PersonIconAndNameInTopContact activeChat={activeChat} />
                <PersonIconsCallVideoLike />
            </div>
    }

    return (CheckActivePerson())
}
export default TopContact