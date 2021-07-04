import React,{ Component} from 'react';
import {Navbar,Collapse,NavbarBrand, Nav, NavbarToggler, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class Navigation extends Component {

    state = {
        navbarToggle : null
    }

    navbarToggler = () => {
        this.setState({
            navbarToggle: !this.state.navbarToggle
        })
    }

    render() {
        return(
            <div>
                <Navbar className="navbar" dark color="dark" expand="md">
                    <div className="container">
                        <NavbarBrand className="brand" to="/">Lakshmipur Polytechnic Institute</NavbarBrand>
                        <NavbarToggler onClick={this.navbarToggler}/>
                        <Collapse isOpen={this.state.navbarToggle} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/">Result</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/technology">Technology</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/academic">Academic</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/notice">Notice</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/routine">Routine</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation; 