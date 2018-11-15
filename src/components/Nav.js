import React, {Component} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return ( 
            <div>
                <Navbar color="transparent" light fixed="top" expand="md">
                    <NavbarBrand to="/" tag={RRNavLink}>
                        <img className="brand-img" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav pills vertical={this.state.isOpen ? true : false} justified="end" className="ml-auto">
                                <NavItem>
                                    <NavLink exact to="/" tag={RRNavLink}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/library" tag={RRNavLink}>Library</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
            </div>
    );
  }
}

export default Navigation;