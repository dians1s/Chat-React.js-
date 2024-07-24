import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import classes from './CreateChatButton.module.css'
import { FcPlus } from "react-icons/fc";


const CreateChatButton = ({ chats, setChats, contacts, setActiveChat }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (<div className="App__ChatMenu__CreateChatButton">
        <FcPlus className={classes.CreateChatButton} r={24} onClick={openModal} />
        <ModalWindow chats={chats} setChats={setChats} contacts={contacts} setActiveChat={setActiveChat} closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </div>
    )
}

export default CreateChatButton