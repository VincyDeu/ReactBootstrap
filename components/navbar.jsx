import React, { Component } from "react";
import { navLinks } from '../data/navbar';
import { nanoid } from 'nanoid';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

class navbar extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (

            <Container>
                <Nav className="navbar">
                    <div className="content">
                    {navLinks.map((link) => {
                        return(
                            <Nav.Link key={nanoid()} href={link.href}>{link.title}</Nav.Link>
                        )
                       })}
                    </div>
                </Nav>
            </Container>
        
        )
    }
}

export default navbar