import React from "react";
import PersonBigIconAside from "./PersonBigIconAside";
import CallChatButton from "./UI/button/CallChatButton";
import VideoChatButton from "./UI/button/VideoChatButton";
import LikeChatButton from "./UI/button/LikeChatButton";



const ContactAside = ({ activeChat }) => {

    const CheckActivePerson = () => {
        return activeChat === null ?
            <></>
            :
            <div className="App__ContactAside">
                <PersonBigIconAside activeChat={activeChat} />
                <h3 className="App__ContactAside__PersonNameContactAside">{activeChat?.fullname}</h3>
                <div className="App__ContactAside__IconsAside">
                    <CallChatButton />
                    <VideoChatButton />
                    <LikeChatButton />
                </div>
            </div>
    }

    return (CheckActivePerson())
}


export default ContactAside