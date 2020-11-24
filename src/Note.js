import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const Note = () => {
    return (
        <>
            <div className="note">
                <h1> Title</h1>
                <br />
                <p>This is the content</p>
                <Button className="btn" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>
                    <DeleteOutlineIcon className="deleteicon" />
                </Button>
            </div>
        </>
    )
}

export default Note;