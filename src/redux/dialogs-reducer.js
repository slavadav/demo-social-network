const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

const initialState = {
    users: [
        {id: '1', name: 'Slava'},
        {id: '2', name: 'Roma'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Sasha'}
    ],
    messages: [
        {id: '0', message: 'No API for this App part'},
        {id: '1', message: 'Hello'},
        {id: '2', message: 'Hi'}
    ],
    messageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            if (state.messageText.trim()) {
                const newMessage = {
                    id: Date.now(),
                    message: state.messageText.trim()
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    messageText: ''
                }
            } else 
                return state
        }
        case UPDATE_MESSAGE:
            return {
                ...state,
                messageText: action.messageText
            }
        default: 
            return state
    } 
}

export const addMessageActionCreator = () => ({ type: 'ADD_MESSAGE' })
export const updateMessageActionCreator = (messageText) => ({ type: 'UPDATE_MESSAGE', messageText })

export default dialogsReducer