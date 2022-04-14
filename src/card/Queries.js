import React from 'react'
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";

const Queries = (props) => {
    let card = props.card;
    return (
        <>
            <div className='accordion-demo demo mt-4'>
                <Accordion>
                    <AccordionTab className='demo1 faqbg2' header={
                        <div className='d-flex'>
                            <p>{card.title}</p><span className='ml-auto'> <MdKeyboardArrowDown /></span>
                        </div>


                    }>

                        <div className="mt-4 maincnt">
                            <Link to="" className='link'> <p className="categorycontent4">
                                {card.subtitle}
                            </p></Link>
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </>
    )
}

export default Queries