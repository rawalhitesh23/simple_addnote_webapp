import React from 'react'
import logo from './images/note.png'

const Header = () => {
    return (
        <>
            <nav>
                <img src={logo} alt="logo" width='50' height='50' />
                <h1> Keep Notes </h1>
            </nav>
        </>
    )
}

export default Header;