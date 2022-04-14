import { React, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Row, Col, Container, Button } from 'react-bootstrap';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './Home.css';

import hero from '../images/hero_img.svg';
import saloon from '../images/salon.png';
import doctor from '../images/doctors.png';
import services from '../images/services.png';
import sports from '../images/sports.png';
import home from '../images/home.png';
import govt from '../images/govt.png';
import feat from '../images/feat.png';
import feat1 from '../images/featicon1.png';
import feat2 from '../images/featcon2.png';
import feat3 from '../images/con3.png';
import unique from '../images/unique_img.svg';
import team1 from '../images/team1.svg';
import team2 from '../images/team2.svg';
import team3 from '../images/team3.svg';
import team4 from '../images/team4.svg';
import team5 from '../images/team5.svg';
import team6 from '../images/team6.svg';
import doctor1 from '../images/doctor.svg';
import AppointmentCard from '../card/AppointmentCard';
import TeamCard from '../card/TeamCard';
import Header from './Header';
import Queries from '../card/Queries';
import Footer from './Footer';
import { TabView, TabPanel } from 'primereact/tabview';


export default function Home() {

    const [appointment, setAppointment] = useState([
        { img: saloon, heading: "Beauty & Salon", content: "Make it convenient for your clients to book an online appointment for services like waxing, facials and much more." },
        { img: doctor, heading: "Doctor & Clinic", content: "Hospitals and clinics can offer patients a suitable booking of an appointment with their specialist from their homes." },
        { img: services, heading: "Professional Services", content: "Lawyers, Counselors and other professionals can launch an appointment booking app for clients to arrange meetings." },
        { img: sports, heading: "Sports & Fitness", content: "For substantial customers offer online bookings of an appointment for classes of a workout, gym, club & yoga." },
        { img: home, heading: "Home Services", content: "Allow customers to easily book a service like babysitting, housekeeping, dusting, cleaning etc from an app." },
        { img: govt, heading: "Govt. Services", content: "Government organizations can ease citizens' access to the use of public with an interface for appointment booking." }
    ])
    const [team, setTeam] = useState([
        { img: team1, title: "One UI/UX Designer" },
        { img: team2, title: "Two Android Developers" },
        { img: team3, title: "Two iOS Developers" },
        { img: team4, title: "One Backend Developer" },
        { img: team5, title: "One QA Tester" },
        { img: team6, title: "One Project Manager" }
    ])
    const [queries, SetQueries] = useState([
        { title: "Is this app suitable for my business?", subtitle: "Definitely! We're developing apps for small businesses to major companies." },
        { title: "How can I get started?", subtitle: "Once you put trust in Vasundhara Infotech  and inquire about setting up your business application, our team will take care of the entire process." },
        { title: "Will my customers be able to download applications in the Google Play Store or the Apple store?", subtitle: "Yes! We make it easier for your customers to find your app on the Google Play Store and Apple Store. We will create your appointment booking app with the name that you suggest so that it is easier for your customers to track you and download the app." },
        { title: "Is it possible to have an application in the iOS and Android framework?", subtitle: "Yes, most of the applications we’ve developed are compliant with both platforms. We're using a native and hybrid platform to support both Android and iOS." },
        { title: "What can be the estimated cost of the online appointment booking app?", subtitle: "Every project has its own specifications and we are taking a special, fresh approach to the same. The cost of development differs based on the features, functionality and form of the project. Contact us for detailed information." }
    ])

    return (
        <div>
            {/* navbar */}
            <div id='#' className='hero-section'>
                <Header />
            </div>
            <section className='hero-section' id='demo'>
                {/* hero subsection */}
                <Container>
                    <div>
                        <Row className='pb-5'>
                            <Col md={6}>
                                <div className='maintitle d-flex flex-column justify-content-center'>
                                    <div className='sub-con ps-sm-5'>
                                        <h1 className='sub-con'>Appointment <br />Booking</h1>
                                    </div>
                                    <div className="sub-con1 ps-sm-5">
                                        <h1 className='sub-con1'>
                                            App Development
                                        </h1>
                                    </div>
                                    {/* <div className='subcon2 ps-5'> */}
                                    <p className="subcon2 ps-sm-5 ">We provide a tailored mobile application for appointment booking services to easily book client and customer meetings and streamline the company's systems to expand their business.</p>
                                    {/* </div> */}
                                    <div className='ps-5 vvx0'>
                                        <a href="#contact" className="btn-get-started conbutton">Contact Us</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='slideimg'>
                                    <img className="w-100 vert-move" src={hero} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <Container fluid id='about'>
                <div className='back-to-top'>
                    <a href='#demo'><i className='bx bxs-chevron-up '></i></a>
                </div>
                <Container className="cardsection">
                    <Row>
                        <div className='subsection d-flex justify-content-center text-align-center'>
                            <p className='line'>We provide customized <span>appointment booking app</span> for several businesses mentioned<br />below</p>
                        </div>
                    </Row>
                    <Row>
                        <div className='subsection2'>
                            <h2>Our Appointment <span>Services</span></h2>
                        </div>
                    </Row>
                    <Row>
                        {
                            appointment.map((el, i) => {
                                return <AppointmentCard sm={4} className="appointment-box" key={"appointment" + i} card={el} />
                            })
                        }
                    </Row>
                </Container>
            </Container>
            <Container fluid className="hero-section">
                <Container className='pt-5 pb-5' id='features'>
                    <div>
                        <h4 className='fetures'>Appointment Booking App Modules</h4>
                    </div>
                    <div className="pb-5">
                        <h1 className='fetures1 pt-3'>Innovative <span>Features</span></h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <TabView>
                            <TabPanel header={
                                <Col sm={4} lg={3} className='mt-2'>
                                    <Button className='active-button p-3 me-4'>
                                        Customer App
                                    </Button>
                                </Col>
                            }>
                                <div className="mt-5 ">
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
                                </div>
                            </TabPanel>
                            <TabPanel header={
                                <Col sm={4} lg={3} className='mt-2'>
                                    <Button className='active-button acv-btn p-3 me-4'>
                                        Owner & Admin
                                    </Button>
                                </Col>
                            }>
                                <div className="mt-5 ">
                                    <Row>
                                        <Col sm={6} className="d-flex justify-content-center mt-4">
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
                                        <Col sm={6} className="d-flex justify-content-center mt-4">
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
                                    </Row>
                                </div>
                            </TabPanel>
                            <TabPanel header={
                                <Col sm={4} lg={3} className='mt-2'>
                                    <Button className='active-button acv-btn p-3 me-4'>
                                        Other Features
                                    </Button>
                                </Col>
                            }>
                                <div className="mt-5 ">
                                    <Row>
                                        <Col sm={6} className="d-flex justify-content-center mt-4">
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
                                        <Col sm={6} className="d-flex justify-content-center mt-4">
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
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                    <div className='d-flex justify-content-center'>

                        <Row className="vvx2">

                            <Col sm={4} className='mt-2'>
                                <Button className='active-button p-3 me-4'>
                                    Customer App
                                </Button>
                            </Col>
                            <Col sm={4} className='mt-2'>
                                <Button className='active-button1 p-3 me-4'>
                                    Owner & Admin
                                </Button>
                            </Col>
                            <Col sm={4} className='mt-2'>
                                <Button className='active-button1 p-3 me-4'>
                                    Other Features
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-5 ">
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
                    </div>
                </Container>
            </Container>
            <Container className="mt-5 pb-5" id='development'>
                <div className="section1title">
                    <div className="titlesection">
                        <h4>Want to Know</h4>
                    </div>
                    <div>
                        <h1 className='pt-3 titlesection1'>How We Are <span>Unique?</span></h1>
                    </div>
                    <Row className='align-items-center pt-3 d-flex'>
                        <Col md={12} lg={6}>
                            <div className='uniqueimg'>
                                <img src={unique} alt="unique" title=' How Vasundhara infotech is Unique in Developing Appointment Scheduling App' />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className='uniquesection'>
                                <h2>
                                    Want to recruit our team and finding reasons? We're offering you plenty.
                                </h2>
                                <ul className="mt-3">
                                    <li className='d-flex mb-2'>
                                        <i className='bx bx-right-arrow mr-4'></i>
                                        <p className='me-5 uniquesection1'>Years of deep hands-on experience in the development of <a>app development services</a></p>
                                    </li>
                                    <li className='d-flex mb-2'>
                                        <i className='bx bx-right-arrow mr-4'></i>
                                        <p className='me-5  uniquesection1'>Extensive experience in deploying mobile apps at reasonable costs for overall cost calculation.</p>
                                    </li>
                                    <li className='d-flex mb-2'>
                                        <i className='bx bx-right-arrow mr-4'></i>
                                        <p className='me-5 uniquesection1'>Successful testing method.</p>
                                    </li>
                                    <li className='d-flex mb-2'>
                                        <i className='bx bx-right-arrow mr-4'></i>
                                        <p className='me-5 uniquesection1'>Coding according to guidelines of application development.</p>
                                    </li>
                                    <li className='d-flex mb-2'>
                                        <i className='bx bx-right-arrow mr-4'></i>
                                        <p className='me-5 uniquesection1'>Free Deployment.</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className='mt-5 pb-5'>
                <div className="section1title">
                    <div className="titlesection">
                        <h4>Get to Know</h4>
                    </div>
                    <div>
                        <h1 className='pt-2 titlesection1'>Our Developers <span>Team</span></h1>
                    </div>
                    <Row className="pt-5">
                        {
                            team.map((el, i) => {
                                return <TeamCard className="team" key={"team" + i} card={el} />
                            })
                        }
                    </Row>
                </div>
            </Container>
            <section className="faq py-5" id="help">
                <Container>
                    <div className='section1title'>
                        <div className="titlesection">
                            <h4 className="tt">Often asked queries</h4>
                        </div>
                        <div>
                            <h1 className='pt-2 titlesection1'>faq</h1>
                        </div>
                        <div>
                            {
                                queries.map((el, i) => {
                                    return <Queries key={"queries" + i} card={el} />
                                })
                            }
                        </div>
                    </div>
                </Container>
            </section>
            <section id="contact" className='pb-5'>
                <Container>
                    <div className='section1title mt-5'>
                        <div className="titlesection">
                            <h4 className="tt">If you have a question or a comment</h4>
                        </div>
                        <div>
                            <h1 className='pt-md-2 titlesection1'>Contact Us</h1>
                        </div>
                    </div>
                    <div className='align-item-center'>
                        <Row className='mt-md-5'>
                            <Col sm={12} md={5}>
                                < div className='contact mt-5'>
                                    <img className='' src={doctor1} title="Appointment Scheduling App Development" alt="Appointment Scheduling App Development" />
                                </div>
                            </Col>
                            <Col sm={12} md={7} className="text-align-center">

                                <Row className="mb-5">
                                    <Col sm={5}>
                                        <input className="text" type='text' placeholder='Name'></input>
                                    </Col>
                                    <Col sm={5}>
                                        <input className="text" type='email' placeholder='Email id'></input>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col sm={10}>
                                        <div>
                                            <input className="text" type='text' placeholder='Number'></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col sm={10}>
                                        <div>
                                            <textarea className="text" type='text' placeholder='Message' />
                                        </div>
                                    </Col>
                                </Row>
                                <div className='justify-content-center justify-content-sm-start d-flex'>
                                    <Button className="cntbtn">Send</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            {/* footer */}
            <Footer />
        </div>
    )
}

