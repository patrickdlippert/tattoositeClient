import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


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

    handleLogin(values) {
        //console.log('Login form values: ' + JSON.stringify(values));
        //alert('Current contents of Login Form: ' + JSON.stringify(values));
        this.toggleLoginModal();
        this.props.postLoginForm(values);
        this.props.resetLoginForm();
    }

    handleNewAccount(values) {
        //console.log('Create Account form values: ' + JSON.stringify(values));
        //alert('Current contents of Account Form: ' + JSON.stringify(values));
        this.toggleNewAccountModal();
        this.props.postAccountForm(values);
        this.props.resetAccountForm();
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
                    <ModalBody className="modal-body">
                        <Form className="p-sm-2" model="loginForm" onSubmit={values => this.handleLogin(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username" md={3}>Username</Label>
                                <Col md={9}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger reason-text"
                                        model=".username"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={3}>Password</Label>
                                <Col md={9}>
                                    <Control.text model=".password" id="password" name="password" type="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger reason-text"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox
                                            model=".remember"
                                            name="remember"
                                            className="form-check-input"
                                        /> 
                                        Remember me
                                    </Label>
                                </div>
                            </Row>
                            <Button type="submit" color="danger">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                {/* Modal for user to create a new account */}
                <Modal isOpen={this.state.isNewAccountModalOpen} toggle={this.toggleNewAccountModal}>
                    <ModalHeader toggle={this.toggleNewAccountModal}>Create an account</ModalHeader>
                    <ModalBody className="modal-body">
                        <Form className="p-sm-2" model="accountForm" onSubmit={values => this.handleNewAccount(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username" md={3}>Username</Label>
                                <Col md={9}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger reason-text"
                                        model=".username"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={3}>Password</Label>
                                <Col md={9}>
                                    <Control.text model=".password" id="password" name="password" type="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(8),
                                            maxLength: maxLength(32)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger reason-text"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 8 characters',
                                            maxLength: 'Must be 32 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>First name</Label>
                                <Col md={9}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger reason-text"
                                        model=".firstname"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={3}>Last name</Label>
                                <Col md={9}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger reason-text"
                                        model=".lastname"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>   
                            </Row>
                            <Button type="submit" color="danger">Create Account</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
        
    }
}

export default Header;