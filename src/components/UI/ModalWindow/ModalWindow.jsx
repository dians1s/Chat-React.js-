import classes from './ModalWindow.module.css'
import Modal from 'react-modal';
import Contacts from '../../Contacts';


const ModalWindow = ({ chats, setChats, contacts, setActiveChat, closeModal, modalIsOpen }) => {

    const modalContent = (
        <Contacts chats={chats} setChats={setChats} contacts={contacts} setActiveChat={setActiveChat} closeModal={closeModal} />
    )

    return (<Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={classes.ModalWindow} overlayClassName={classes.Overlay}>
        {modalContent}
    </Modal>
    )
}

export default ModalWindow

