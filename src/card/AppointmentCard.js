import React from 'react';
import { Col } from 'react-bootstrap';



const AppointmentCard = (props) => {

    let card = props.card;
    return (
        <>
            <Col sm={4} className="appointment-box">
                <div className='content-box'>
                    <img className='w-100' src={card.img} alt="salon" />
                    <h4 class="mt-4 cardtitle">{card.heading}</h4>
                    <p className='cardcon'>{card.content}</p>
                </div>
            </Col>

        </>
    )
}

export default AppointmentCard