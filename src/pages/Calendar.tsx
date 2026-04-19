import Layout from './Layout'
import { useState } from 'react'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import { Link } from 'react-router-dom'

type Event = {
    title: string
    description: string
    date: string
    eventB: boolean
}

function formatDate(d: Date) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

function humanDate(d: Date){
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}

function Module({event,setEvent,refill}:{event: Event, setEvent: any, refill: boolean}) {
    return (
        <div className="border-top border-black py-3">
            <div className="container-fluid d-flex justify-content-between my-2">
                <h5 className="d-inline-block">{event.title}</h5>
                <button className="important border-0 rounded" onClick={() => setEvent(null)}>
                    <i className="bi bi-x"></i>
                </button>
            </div>

            <div className="container-fluid">
                <p>{event.description}</p>

                {refill && (
                    <Link to="/Schedule" className="links">
                        <button className="my-2 d-block text-start fs-6 important border-0 rounded">
                            Refill Medication
                            <i className="bi bi-caret-right-fill fs-6 m-2 d-inline-block"></i>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default function Calendar({contrast,toggleContrast}: {contrast: boolean, toggleContrast: any}) {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    function handleEventClick(info: any) {
        setSelectedEvent({
            title: info.event.title,
            description: info.event.extendedProps.description,
            date: humanDate(info.event.start),
            eventB: true
        })
    }

    function handleSelect(info: any) {
        const calendar = info.view.calendar
        const events = calendar.getEvents()

        const start = info.start

        const eventsForDay = events.filter((event: any) => {
            const d = event.start
            return (
                d.getFullYear() === start.getFullYear() &&
                d.getMonth() === start.getMonth() &&
                d.getDate() === start.getDate()
            )
        })

        if (eventsForDay.length > 0) {
            const first = eventsForDay[0]

            setSelectedEvent({
                title: first.title,
                description: first.extendedProps.description,
                date: formatDate(first.start),
                eventB: true
            })
        } 
        else {
            setSelectedEvent({
                title: "No events",
                description: `No events for ${humanDate(start)}`,
                date: formatDate(start),
                eventB: false
            })
        }
    }

    const today = new Date()
    const todayStr = formatDate(today)

    return (
        <Layout
            page="Calendar"
            tooltip="A calendar to keep track of important dates such as refills, pick-ups, appointments, etc."
            current={3}
            contrast={contrast}
            toggleContrast={toggleContrast}
        >
            <div className="p-2 m-3 fw-bold">
                Click a date to see what events are occurring.
            </div>

            <div className="container-fluid d-flex flex-column h-100">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "prev,next today",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    buttonText={{
                        today: "Go To Today",
                        month: "Month",
                        week: "Week",
                        day: "Day"
                    }}

                    selectable={true}
                    select={handleSelect}
                    eventClick={handleEventClick}

                    events={[
                        {
                            title: "Refill Medication 1",
                            start: todayStr,
                            description: "Medication 1 runs out and needs to be refilled.",
                            backgroundColor: "#dc3545"
                        }
                    ]}

                    height="auto"
                    contentHeight="auto"
                />

                {selectedEvent && (<Module event={selectedEvent} setEvent={setSelectedEvent} refill={selectedEvent.eventB}/>)}
            </div>
        </Layout>
    )
}