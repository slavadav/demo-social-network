import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    const userElements = props.dialogsPage.users.map( user => 
        (<DialogItem name={user.name} id={user.id} key={user.id}/>))
    const messageElements = props.dialogsPage.messages.map( message => 
        (<Message message={message.message} key={message.id} />))

    const addMessage = () => {
        props.addMessage()
    }

    const updateNewMessage = (e) => {
        const messageElement = e.target.value
        props.updateMessage(messageElement)
    }

    return (
        <div className="row">
            <div className="list-group col-3">
                { userElements }
            </div>
            <div className="col-6">
                <form className="form-group">
                    <input 
                        onChange={updateNewMessage}
                        value={props.dialogsPage.messageText}
                        placeholder='New message'
                        className="form-control my-2" />
                    <button onClick={addMessage}
                            className="btn btn-sm btn-primary ml-3 mb-3">
                        Send
                    </button>
                </form>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs