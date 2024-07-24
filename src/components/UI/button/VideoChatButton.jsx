import React from "react";
import classes from './VideoChatButton.module.css'
import { IoVideocam } from "react-icons/io5";


const VideoChatButton = () => {
    return (<div className="VideoChatButton">
        <IoVideocam className={classes.VideoChatButton} />
    </div>
    )
}

export default VideoChatButton