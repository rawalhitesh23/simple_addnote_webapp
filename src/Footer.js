import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <>
            <div className="footer">
                <p>copyright
                <span> &#169;</span> {year}</p>
            </div>
        </>
    )
}

export default Footer;