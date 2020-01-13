import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        },
        /* updateNewMessage: (newMessageElement) => {
            dispatch(updateMessageActionCreator(newMessageElement))
        } */
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


/* const DialogsContainer = () => {
    return (
    <StoreContext.Consumer>
        { store => {
            const state = store.getState()
            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            const updateNewMessage = (newMessageElement) => {
                store.dispatch(updateMessageActionCreator(newMessageElement))
            }
    
            return <Dialogs dialogsPage={state.dialogsPage}
                    updateNewMessage={updateNewMessage}
                    addMessage={addMessage}/>
            }
        }
    </StoreContext.Consumer>
    )
} */