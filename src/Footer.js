import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <>
            <footer>
                <p>copyright
                <span> &#169;</span> {year}</p>
            </footer>
        </>
    )
}

export default Footer;