import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const header = () => {
    return (
        <div className="header">
            <Navbar bg="light" variant="light">
                <Navbar.Brand className="text-center">
                    <h4>Welcome to Full Throttle Labs!!</h4>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default header;