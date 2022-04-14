import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import { Row, Col } from 'react-bootstrap';
import feat from '../images/feat.png';
import feat1 from '../images/featicon1.png';
import feat2 from '../images/featcon2.png';
import feat3 from '../images/con3.png';

export default function Tabview() {

    return (
        <div className="tabview-demo">
            <div className="card">
                <h5>Default</h5>
                <TabView>
                    <TabPanel header={
                        <Button className='active-button p-3 me-4'>
                            Customer App
                        </Button>
                    }>
                        <Row>
                            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4">

                                <div className="featname justify-content-center d-flex">
                                    <div>
                                        <div>
                                            <img src={feat} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Native App</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>Personalized iOS & Android appointment booking app for your clients and customers.</p>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex">
                                    <div>
                                        <div>
                                            <img src={feat1} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Browse <br />Service</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>Browse services with service listings, search, filters and sorting options for customers.
                                        </p>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex">
                                    <div>
                                        <div>
                                            <img src={feat2} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Bussiness <br />Infromation</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>Valuable information about your business with images, comments, timings etc.</p>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex ">
                                    <div>
                                        <div>
                                            <img src={feat3} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Service Page</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>A service listing page containing facts, images, feedback, schedules, costs etc.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel header={<Button className='active-button p-3 me-4'>
                        Customer App
                    </Button>}>
                        <Row>
                            <Col className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex">
                                    <div>
                                        <div>
                                            <img src={feat1} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Browse <br />Service</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>Browse services with service listings, search, filters and sorting options for customers.
                                        </p>
                                    </div>

                                </div>
                            </Col>
                            <Col className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex">
                                    <div>
                                        <div>
                                            <img src={feat2} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Bussiness <br />Infromation</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>Valuable information about your business with images, comments, timings etc.</p>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={3} sm={6} className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex ">
                                    <div>
                                        <div>
                                            <img src={feat3} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Service Page</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>A service listing page containing facts, images, feedback, schedules, costs etc.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel header={<Button className='active-button p-3 me-4'>
                        Customer App
                    </Button>}>
                        <Row>

                            <Col className="d-flex justify-content-center mt-4">
                                <div className="featname justify-content-center d-flex">
                                    <div>
                                        <div>
                                            <img src={feat1} alt="" />
                                        </div>
                                        <div className='pt-4'>
                                            <h5>Browse <br />Service</h5>
                                        </div>
                                    </div>
                                    <div className="vvx">
                                        <p>Browse services with service listings, search, filters and sorting options for customers.
                                        </p>
                                    </div>

                                </div>
                            </Col>


                        </Row>
                    </TabPanel>
                </TabView>
            </div>


        </div>
    )
}
