import React from 'react';
import { Jumbotron, Container, Button, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Jumbo = () => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-1 shadow-red-lg">Bloc Jams</h1>
                <p className="lead shadow-red-sm">Turn the music up!</p>
                <NavLink to="/library" tag={RRNavLink}>
                    <Button className="btn-jumbo">Listen Now</Button>
                </NavLink>
            </Container>
        </Jumbotron>
    );
};

export default Jumbo;