import Layout from './Layout'
import { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link } from 'react-router-dom';

type Event = {
    title: string,
    description: string,
    date: string
}

function Module({event, setEvent, refill}:{event:Event, setEvent:any, refill:Boolean}){
    return(
        <div className="border-top border-black py-3">
            <div className="container-fluid d-flex justify-content-between my-2">
                <h5 className='d-inline-block'>{event.title}</h5>
                <button className='important border-0 rounded' onClick={() => setEvent(null)}><i className='bi bi-x'></i></button>
            </div>
            <div className="container-fluid">
                <p>{event.description}</p>
                {refill && <Link to="/Schedule" className='links'><button className="my-2 d-block text-start fs-6 important border-0 rounded">
                Refill Medication <i className="bi bi-caret-right-fill fs-6 m-2 d-inline-block"></i></button></Link>}
            </div>
        </div>
    )
}


export default function Calendar() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    function handleEventClick(info:any){
        setSelectedEvent({title: info.event.title, description: info.event.extendedProps.description, date: info.event.startSt })
    }

    return (
    <Layout page="Calendar">
        <div className='container-fluid h-100 d-flex flex-column'>
            <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            buttonText={{today:"Today"}}
            events={[{title: "Refill Medication 1",date: "2026-03-25",description: "Medication 1 runs out and needs to be refilled.", backgroundColor: "#dc3545"}]}
            eventClick={handleEventClick}
            height="80vh"
        />
        {selectedEvent && <Module event={selectedEvent} setEvent={setSelectedEvent} refill={true}/>}
        </div>
    </Layout>
    );
}