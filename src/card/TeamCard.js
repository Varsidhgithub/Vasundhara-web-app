import React from 'react';
import { Col } from 'react-bootstrap';

const TeamCard = (props) => {
    let card = props.card;

    return (
        <>
            <Col md={6} lg={4} sm={6}>
                <div className="team">
                    <div className='p-5'>
                        <img src={card.img} />
                    </div>
                    <div>
                        <a>{card.title}</a>
                    </div>
                </div>


            </Col>
        </>
    )
}

export default TeamCard