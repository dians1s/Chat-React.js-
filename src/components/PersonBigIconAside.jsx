import React from "react";

const PersonBigIconAside = ({ activeChat }) => {
    return (
        <div className="App__ContactAside__PersonBigIconAside">
            <img src={activeChat?.icon} alt={activeChat?.fullname + ' Icon'} />
        </div>
    )
}


export default PersonBigIconAside