import React, {useState, useEffect} from 'react'

const ProfileStatus = (props) =>  {
    
    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

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
            {props.isOwner 
                ? (editMode 
                    ? <div>
                        <input type="text" autoFocus={true}
                            onBlur={deactivateEditMode}
                            onChange={onStatusChange}
                            value={status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>                    
                    </div>)
                : <div>
                    <span>{props.status || '-----'}</span>                    
            </div>}   
        </div>
    )
}

export default ProfileStatus