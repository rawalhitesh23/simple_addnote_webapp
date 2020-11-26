import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'
import './App.css'

const App = () => {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note]
    })
    console.log(addItem)
  }

  const onDelete = (id) => {
    setAddItem((oldNotes) => oldNotes.filter((item, index) => { return index !== id }))
  }

  return (
    <>
      <Header />
      <div className="main">
        <CreateNote passNote={addNote} />
        <div className="note_div">
          {addItem.map((item, index) => {
            return <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              deleteItem={onDelete}
            />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;