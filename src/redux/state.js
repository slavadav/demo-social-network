let rerenderEntirePage = () => {}

export let state = {
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
}

export const addPost = () => {
    const newPost = {
        id: '4',
        post: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntirePage(state)
}

export const updateNewPost = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntirePage(state)
}

export const addMessage = () => {
    const newMessage = {
        id: '4',
        message: state.dialogsPage.newMessage,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessage = ''
    rerenderEntirePage(state)
}

export const updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessage = newMessage
    rerenderEntirePage(state)
}

export const subscribe = (observer) => {
    rerenderEntirePage = observer
}