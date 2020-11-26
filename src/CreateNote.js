import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ReplayIcon from '@material-ui/icons/Replay'

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: '',
    })

    // add entered data by user into note
    const inputEvent = (e) => {
        // object destructuring
        const { name, value } = e.target

        setNote((preData) => {
            return {
                ...preData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: "",
        })
    }

    return (
        <>
            <div className="main_note">
                <form>
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}
                        placeholder="Title"
                        autoComplete="off"
                    />
                    <textarea
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                        placeholder="Write a note...">
                    </textarea>

                    <ReplayIcon className="replayicon" style={{ maxWidth: '15px', maxHeight: '15px', minWidth: '15px', minHeight: '15px' }} />

                    <Button className="addbtn" style={{ maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px' }} onClick={addEvent}>
                        <AddIcon />
                    </Button>

                </form>
            </div>
        </>
    )
}

export default CreateNote