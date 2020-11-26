import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id)
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <Button className="btn" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteicon" />
                </Button>
            </div>
        </>
    )
}

export default Note;