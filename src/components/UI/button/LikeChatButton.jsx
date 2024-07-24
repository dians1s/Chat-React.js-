import React from "react";
import classes from './LikeChatButton.module.css'
import { FcLike } from "react-icons/fc";


const LikeChatButton = () => {
    return (<div className="LikeChatButton">
        <FcLike className={classes.LikeChatButton} />
    </div>
    )
}

export default LikeChatButton