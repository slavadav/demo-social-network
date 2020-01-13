import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessage' placeholder='Enter new message' />
            <button>Send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm)

const Dialogs = (props) => {
    const userElements = props.dialogsPage.users.map( user => (<DialogItem name={user.name} id={user.id} key={user.id}/>))
    const messageElements = props.dialogsPage.messages.map( message => (<Message message={message.message} key={message.id} />))

    const addNewMessage = (newMessageText) => {
        props.addMessage(newMessageText.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { userElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <NewMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs

/* 
const Dialogs = (props) => {
    const userElements = props.dialogsPage.users.map( user => (<DialogItem name={user.name} id={user.id} key={user.id}/>))
    const messageElements = props.dialogsPage.messages.map( message => (<Message message={message.message} key={message.id} />))

    const addMessage = () => {
        props.addMessage()
    }

    const updateNewMessage = (e) => {
        const newMessageElement = e.target.value
        props.updateNewMessage(newMessageElement)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { userElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <div>
                    <textarea 
                        onChange={updateNewMessage} 
                        value={props.dialogsPage.newMessageText}
                        placeholder='New message' />
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
} */