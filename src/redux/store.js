import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'

let store = {
    _state: {
        profilePage: {
            posts: [
            {id: '1', post: 'First post', likesCount: 12},
            {id: '2', post: 'Second post', likesCount: 13},
            {id: '3', post: 'Third post', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            users: [
                {id: '1', name: 'Slava'},
                {id: '2', name: 'Roma'},
                {id: '3', name: 'Andrey'},
                {id: '4', name: 'Sasha'}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hello'},
                {id: '3', message: 'Yo'}
            ],
            newMessage: ''
        }
    },
    _subscriber() {
        console.log('no subscribers')
    },

    getState() {
        return this._state
    },    
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._subscriber(this._state)  
    } 
}

export { store }