const ADD_MESSAGE = 'ADD_MESSAGE'
//const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const initialState = {
    users: [
        {id: '1', name: 'Slava'},
        {id: '2', name: 'Roma'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Sasha'}
    ],
    messages: [
        {id: '0', message: 'Hi'},
        {id: '1', message: 'Hello'},
        {id: '2', message: 'Yo'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        /* case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            } */
        case ADD_MESSAGE:
            const newMessage = {
                id: '3',
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        default: 
            return state
    } 
}

export const addMessageActionCreator = (newMessageText) => ({ type: 'ADD_MESSAGE', newMessageText })
/* export const updateMessageActionCreator = (newMessage) => 
    ({ type: 'UPDATE-NEW-MESSAGE', newMessage }) */

export default dialogsReducer