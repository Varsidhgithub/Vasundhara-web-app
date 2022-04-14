import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import logo1 from '../images/logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaSkype, FaLinkedinIn } from 'react-icons/fa';



export default function Footer() {
    return (
        <>
            <section className='footer'>
                <Container>

                    <div className='footer1'>

                        <img src={logo1} />

                    </div>
                    <div className='mt-5 footer2'>
                        <Row>
                            <Col sm={12} md={6} lg={3}>
                                <div>
                                    <h4 className='footer3'>About</h4>
                                </div>
                                <div>
                                    <p className="w-75 pt-2">
                                        Vasundhara Infotech is well establish IT company in surat.
                                        We build our reputation on providing superior firmware technology, innovative software solutions.
                                    </p>
                                </div>
                                <div className='icon'>
                                    <ul className='d-flex my-4'>
                                        <li className="pe-3">
                                            <FaFacebookF />
                                        </li>
                                        <li className="pe-3">
                                            <FaTwitter />
                                        </li>
                                        <li className="pe-3">
                                            <FaInstagram />
                                        </li>
                                        <li className="pe-3">
                                            <FaSkype />
                                        </li>
                                        <li className="pe-3">
                                            <FaLinkedinIn />
                                        </li>
                                    </ul>
                                </div>

                            </Col>
                            <Col sm={12} md={6} lg={2}>
                                <div>
                                    <h4 className='footer4'>Links</h4>
                                </div>
                                <div className="pt-2">
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Features</li>
                                        <li>Development</li>
                                        <li>Help</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>

                            </Col>
                            <Col sm={12} md={6} lg={3} className="pb-3">
                                <div>
                                    <h4 className='footer5'>Contact</h4>
                                </div>
                                <div>
                                    <p className=" pt-2">
                                        201-204, Oasis Corner, Dhanmora Char Rasta, Katargam, Surat-395004, Gujarat, India.
                                    </p>
                                    <div className='d-flex'>
                                        <div>
                                            Phone :
                                        </div>
                                        <div className='ms-2'>
                                            +91 8460277501<br />
                                            +91 6354209049
                                        </div>
                                    </div>
                                    <div className='d-flex mt-3 email'>
                                        <div>
                                            Email:
                                        </div>
                                        <div className='ms-1 email'>
                                            sales@vasundharainfotechllp.com
                                        </div>
                                    </div>

                                </div>

                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div>
                                    <h4 className='footer6'>Subscribe</h4>
                                </div>
                                <div>
                                    <p className="w-75 pt-2">
                                        Sign up now for our mailing list to get all latest news and updates from our company
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <input className="text1" type='text' placeholder='Number'></input>
                                    </div>
                                    <div className="subbtn">
                                        <button type="submit" id="submit" class="btnsubscribe btn-outline message">Subscribe</button>
                                    </div>
                                </div>

                            </Col>

                        </Row>

                    </div>
                </Container>
            </section>
            <section className="lastfooter">
                <Container>
                    <div className='text-center lastfooter1'>
                        <p className='m-0'>Copyright © 2022 Vasundhara Infotech. All Rights Reserved</p>

                    </div>
                </Container>

            </section>

        </>
    )
}
