import React from 'react'
import logo from './images/note.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" width='50' height='50' />
                <h1> Keep Notes </h1>
            </div>
            <hr />
        </>
    )
}

export default Header;