import React from "react";

const PersonIconAndNameInTopContact = ({ activeChat }) => {

    return (
        <div className="App__Chat__TopContact__PersonIconAndNameInTopContact">
            <div className="App__Chat__TopContact__PersonIconAndNameInTopContact__PersonIconInTopContact">
                <img src={activeChat?.icon} alt={activeChat?.fullname + ' Icon'} />
            </div>
            <div className="App__Chat__TopContact__PersonIconAndNameInTopContact__PersonNameInTopContact">
                {activeChat.fullname}
            </div>
        </div>
    )
}

export default PersonIconAndNameInTopContact