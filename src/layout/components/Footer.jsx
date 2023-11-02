import React from "react";
import AppLayout from "../AppLayout";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
