import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="text-center">
                Welcome to Full Throttle Labs!!
            </Navbar.Brand>
        </Navbar>
    )
}
export default header;