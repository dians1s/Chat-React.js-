import React from "react";
import CallChatButton from "./UI/button/CallChatButton";
import VideoChatButton from "./UI/button/VideoChatButton";
import LikeChatButton from "./UI/button/LikeChatButton";

const PersonIconsCallVideoLike = ({ activeChat }) => {
    return (
        <div className="App__Chat__TopContact__PersonIconsCallVideoLike">
            <CallChatButton />
            <VideoChatButton />
            <LikeChatButton />
        </div>
    )
}

export default PersonIconsCallVideoLike