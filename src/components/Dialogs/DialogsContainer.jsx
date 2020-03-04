import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer'
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
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (messageText) => {
            dispatch(updateMessageActionCreator(messageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)