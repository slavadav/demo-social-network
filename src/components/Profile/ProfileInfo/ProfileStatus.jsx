import React, {useState, useEffect} from 'react'

const ProfileStatus = (props) =>  {
    
    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false) //Destructuring assignment
    //const editMode = stateWithUseState[0]
    //const setEditMode = stateWithUseState[1]

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
    
    const activateEditMode = () => {
        setEditMode(true)
    }
    
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        
        <div>
            {editMode ? 
            <div>
                <input type="text" autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}/>
            </div> : 
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>                    
            </div>}
        </div>
    )
}

export default ProfileStatus


/* class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            
            <div>
                {this.state.editMode || !this.props.status ? 
                <div>
                    <input type="text" autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        onChange={this.onStatusChange}
                        value={this.state.status}/>
                </div> : 
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>                    
                </div>}
            </div>
        )
    }
}

export default ProfileStatus */