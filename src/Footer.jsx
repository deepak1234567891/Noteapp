import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return( 
    <>
        <footer className="position-absolute bottom-0 start-50 translate-middle-x position-fixed">
            <p>copyright © {year}</p>
        </footer>
    </>
    )
};

export default Footer;