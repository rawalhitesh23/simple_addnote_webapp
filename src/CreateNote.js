import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import ReplayIcon from '@material-ui/icons/Replay';
import Note from './Note'

const CreateNote = () => {
    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" autoComplete="off" />
                    <textarea rows="" column="" placeholder="Write a note...">
                    </textarea>
                    <ReplayIcon className="replayicon" style={{maxWidth: '15px', maxHeight: '15px', minWidth: '15px', minHeight: '15px'}}/>
                    <Button className="addbtn" style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}>
                        <AddIcon />
                    </Button>
                </form>
                <Note />
            </div>
        </>
    )
}

export default CreateNote;