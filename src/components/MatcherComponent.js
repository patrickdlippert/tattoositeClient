import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';


class Matcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numTattoos: '0',
            painThreshold: '2',
            overFifty: '0',
            isCoverUp: '0',
            isExtension: '0',
            isClearIdea: '1',
            isOpenToArtist: '1',
            isColor: '1',
            sizeTattoo: '',
            locationTattoo: '',
            themeTattoo: '',
            styleTattoo: '',
            dateAppointment: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            },
            isModalOpen: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'check' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        //alert('Current state is: ' + JSON.stringify(this.state));
        this.toggleModal();
        this.props.postMatchForm(JSON.stringify(this.state));
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        console.log(this.props.matches);
        return(
            <div className="container"> 
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} background-color="#acb5c3">
                    <div className="modal-frame">
                        <ModalHeader toggle={this.toggleModal}>Artist Matches</ModalHeader>
                        <ModalBody>

                        {this.props.matches.map(match => {
                            return (
                                <div key={match._id} >
                                    <div className="row row-noseparator text-center px-4 align-items-center">
                                        <div className="col-md-5 text-center px-4">
                                            <img className="d-flex mr-3 img-thumbnail" src={baseUrl + match.artist.image} alt={match.artist.name} />
                                        </div>
                                        <div className="col-md-7 text-center px-4">
                                                                                
                                            <h4>Artist: {match.artist.name}</h4>
                                            <p>Match Score: {Number(match.score).toFixed(2)}% </p>
                                            <Link to={`/artists/${match.artist._id}`}>
                                                <Button className="m-3" color="danger">View My Gallery</Button>
                                            </Link>
                                            <Link to={`/contact/`}>
                                                <Button className="m-3" color="danger">Contact Me</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-left p-4">
                                            <ListGroup>
                                            { match.reasons.map((reason, index) => {
                                                return (<ListGroupItem key={index} className='reason-text text-left'> {reason}</ListGroupItem>);
                                                })
                                            }
                                            </ListGroup>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <Button type="close" color="danger" className="mt-4" onClick={this.toggleModal}>
                            Close
                        </Button>

                        </ModalBody>
                    </div>
                </Modal>


                <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>Get matched to an artist</h3>
                        <p className="text-light">Complete the questionnaire below, and we'll match you to an artist who'll deliver an exceptional tattoo!</p>
                    </div>
                </div>


                <Fade in>
                <div className="row row-content">
                    <div className="container-fluid">

                        <Form className="p-sm-5" onSubmit={this.handleSubmit} >
                            {/* Number of Tattoos radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">How many tattoos do you currently have?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="0" 
                                            checked={this.state.numTattoos === "0" }
                                            onChange={this.handleInputChange}
                                        />
                                        None
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="1"
                                            checked={this.state.numTattoos === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        1-2
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="2"
                                            checked={this.state.numTattoos === "2"}
                                            onChange={this.handleInputChange}
                                        />
                                        3-4
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="3"
                                             checked={this.state.numTattoos === "3"}
                                            onChange={this.handleInputChange}
                                        />
                                        5-9
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="4"
                                            checked={this.state.numTattoos === "4"}
                                            onChange={this.handleInputChange}
                                        />
                                        10+
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                                
                            {/* Pain Threshold radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">What is your pain threshold?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="0"
                                            checked={this.state.painThreshold === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        Very Low
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="1"
                                            checked={this.state.painThreshold === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Low
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="2" 
                                            checked={this.state.painThreshold === "2"}
                                            onChange={this.handleInputChange}
                                        />
                                        Moderate
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="3"
                                            checked={this.state.painThreshold === "3"}
                                            onChange={this.handleInputChange}
                                        />
                                        High
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="4" 
                                        checked={this.state.painThreshold === "4"}
                                        onChange={this.handleInputChange}
                                    />
                                    Very High
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/*  Age radio button selection group  */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Are you over age 50?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="overFifty"  value="1"
                                            checked={this.state.overFifty === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="overFifty" value="0" 
                                            checked={this.state.overFifty === "0"}
                                            onChange={this.handleInputChange}
                                        /> 
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/*  Cover up radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Is your new tattoo a cover up?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isCoverUp" value="1"
                                            checked={this.state.isCoverUp === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isCoverUp" value="0"  
                                            checked={this.state.isCoverUp === "0"}
                                            onChange={this.handleInputChange}
                                        /> 
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/*  Cover up radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Is your new tattoo an extension of an existing tattoo?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isExtension" value="1"
                                            checked={this.state.isExtension === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isExtension" value="0"  
                                            checked={this.state.isExtension === "0"}
                                            onChange={this.handleInputChange}
                                        /> 
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/*  Clear Idea radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">I have a very clear idea of what I want</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isClearIdea" value="1"  
                                            checked={this.state.isClearIdea === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isClearIdea" value="0" 
                                            checked={this.state.isClearIdea === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/*   Open to artist radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">I'm open to an artist's interpretation</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isOpenToArtist" value="1"  
                                            checked={this.state.isOpenToArtist === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isOpenToArtist" value="0" 
                                            checked={this.state.isOpenToArtist === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/*   Color or black & gray radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Will your new tattoo be in color or black {'&'} gray?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isColor" value="1"  
                                            checked={this.state.isColor === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Color
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isColor" value="0" 
                                            checked={this.state.isColor === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        Black {'&'} Gray
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/* Select the size of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="sizeTattoo" className="col-sm-5">What size will your new tattoo be?</Label>
                                <div className="col">
                                    <Input required type="select" id="sizeTattoo" name="sizeTattoo"
                                        value={this.state.sizeTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="0">Extra small (single image less than 1" x 1")</option>
                                        <option value="1">Small (single image less than 2" x 2")</option>
                                        <option value="2">Medium (single image less than 6" x 6")</option>
                                        <option value="3">Large (full sleeve or long placement)</option>
                                        <option value="4">Extra Large (full back, chest or leg)</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            
                            {/* Select the location of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="locationTattoo" className="col-sm-5">Where will your new tattoo be located?</Label>
                                <div className="col">
                                    <Input required type="select" id="locationTattoo" name="locationTattoo"
                                        value={this.state.locationTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="0">Wrist</option>
                                        <option value="1">Forearm</option>
                                        <option value="2">Bicep</option>
                                        <option value="3">Hand</option>
                                        <option value="4">Calf</option>
                                        <option value="5">Thigh</option>
                                        <option value="6">Ankle</option>
                                        <option value="7">Neck</option>
                                        <option value="8">Shoulder</option>
                                        <option value="9">Torso</option>
                                        <option value="10">Ribs</option>
                                        <option value="11">Back</option>
                                        <option value="12">Head</option>
                                        <option value="13">Face</option>
                                        <option value="14">Other</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            {/* Select the theme of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="themeTattoo" className="col-sm-5">What is the theme of your new tattoo?</Label>
                                <div className="col">
                                    <Input required type="select" id="themeTattoo" name="themeTattoo"
                                        value={this.state.themeTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="0">Written words</option>
                                        <option value="1">Landscapes</option>
                                        <option value="2">Pets</option>
                                        <option value="3">Wildlife</option>
                                        <option value="4">Portrait</option>
                                        <option value="5">Fantasy</option>
                                        <option value="6">Horror</option>
                                        <option value="7">Gothic</option>
                                        <option value="8">Nautical</option>
                                        <option value="9">Pin-up</option>
                                        <option value="10">Military</option>
                                        <option value="11">Automotive/Motorcycle</option>
                                        <option value="12">Musical</option>
                                        <option value="13">History</option>
                                        <option value="14">Other</option>
                                    </Input>
                                </div>
                            </FormGroup>


                            {/* Select the style of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="styleTattoo" className="col-sm-5">What style will your new tattoo be done in?</Label>
                                <div className="col">
                                    <Input required type="select" id="styleTattoo" name="styleTattoo"
                                        value={this.state.styleTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="0">American Traditional</option>
                                        <option value="1">Neo Traditional</option>
                                        <option value="2">New School</option>
                                        <option value="3">Japanese</option>
                                        <option value="4">Photo Realism</option>
                                        <option value="5">Tribal/Blackwork</option>
                                        <option value="6">Biomechanical</option>
                                        <option value="7">Geometric</option>
                                        <option value="8">Trash Polka</option>
                                        <option value="9">Surrealism</option>
                                        <option value="10">Watercolor</option>
                                        <option value="11">Other</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            {/* Select a desired appointment date in the modal reservation form  */}
                            <FormGroup row>
                                <Label required htmlFor="dateAppointment" className="col-sm-5">Desired appointment date</Label>
                                <div className="col">
                                    <Input required type="date" id="dateAppointment" name="dateAppointment"
                                        value={this.state.dateAppointment}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </FormGroup>


                            <FormGroup row>
                                <Col>
                                    <Button type="submit" color="danger">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>

                
                </Fade>
            </div>
        );
    }
}

export default Matcher;