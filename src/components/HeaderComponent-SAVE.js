import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
            isNewAccountModalOpen: false,
            isDropdownOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleNewAccountModal = this.toggleNewAccountModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleNewAccount = this.handleNewAccount.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    closeNav() {
        if (this.state.isNavOpen === true) {
            this.toggleNav();
        }
    }

    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    toggleNewAccountModal() {
        this.setState({
            isNewAccountModalOpen: !this.state.isNewAccountModalOpen
        });
    }

    handleLogin(event) {
        this.toggleLoginModal();
        this.props.loginUser({ username: this.username.value, password: this.password.value });
        event.preventDefault();

    }

    handleNewAccount(event) {
        this.toggleNewAccountModal();
        this.props.createUser({ username: this.username.value, password: this.password.value, firstname: this.firstname.value, lastname: this.lastname.value });
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
    }

    toggleDropdown() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                {/* Jumbotron header that contains business logo and tag line */}
                <Jumbotron fluid className="m-0 p-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="logo-rectangular" src="/images/BadPandaRectLogo.png" alt="Bad Panda Logo"></img>
                            </div>
                            <div className="col align-self-center">
                                    <h2 className="d-none d-sm-block" id="head-text">The best tattoos in the Pacific Northwest!</h2>
                              

            
                            { !this.props.auth.isAuthenticated 
                                ?
                                <div className="auth-group">
                                    <Button className="auth-button" outline size="sm" color="link" onClick={this.toggleLoginModal}>
                                        <i className="fa fa-sign-in fa-lg" /> Sign in
                                        {this.props.auth.isFetching 
                                            ? <span className="fa fa-spinner fa-pulse fa-fw" />
                                            : null
                                        }
                                    </Button>
                                    <span> | </span>
                                    <Button className="auth-button" outline size="sm" color="link" onClick={this.toggleNewAccountModal}>
                                        New Account
                                        {this.props.auth.isFetching 
                                            ? <span className="fa fa-spinner fa-pulse fa-fw" />
                                            : null
                                        }
                                </Button>
                                </div>
                                :
                                <div className="auth-group">
                                    <Button className="auth-button" outline size="sm" color="link" onClick={this.handleLogout}>
                                        <span className="fa fa-sign-out fa-lg"></span> Logout
                                        {this.props.auth.isFetching 
                                            ? <span className="fa fa-spinner fa-pulse fa-fw"/>
                                            : null
                                        }
                                    </Button>
                                    <span> | </span>
                                    <div className="auth-button p-1">
                                    <i className="far fa-user-circle fa-lg" /> {this.props.auth.user.username}</div>
                                </div>
                            }
                            </div>  


                        </div>
                    </div>
                </Jumbotron>


                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto d-md-none" href="/"><img src="/images/bad_panda_name.png" height="25" alt="Bad Panda Logo" /> </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/artists">
                                        Artists
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/matcher">
                                        Matcher
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown} nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Gallery
                                        </DropdownToggle>
                                        <DropdownMenu left="true">
                                            <DropdownItem>
                                                <NavLink onClick={this.closeNav} className="nav-link text-dark" to="/gallery">
                                                    Style Gallery
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                            <NavLink onClick={this.closeNav} className="nav-link text-dark" to="/artistgallery">
                                                    Artist Gallery
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>

                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/news">
                                        News
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/FAQ">
                                        FAQ
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>



                        </Collapse>
                    </div>
            </Navbar>

            {/* Modal for user login */}
            <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody className="modal-frame">
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="danger">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                {/* Modal for user to create a new account */}
                <Modal isOpen={this.state.isNewAccountModalOpen} toggle={this.toggleNewAccountModal}>
                    <ModalHeader toggle={this.toggleNewAccountModal}>Create an account</ModalHeader>
                    <ModalBody className="modal-frame">
                        <Form onSubmit={this.handleNewAccount}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="firstname">First name</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={input => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input type="lastname" id="lastname" name="lastname"
                                    innerRef={input => this.lastname = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="danger">Create Account</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
        
    }
}

export default Header;