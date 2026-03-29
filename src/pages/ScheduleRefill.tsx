import Layout from "./Layout";
import { useState } from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

function Arrow(){
    return <i className="bi bi-caret-right-fill fs-6 m-2 d-inline-block"></i>
}

function Pencil(){
    return <i className="bi bi-pencil fs-6 m-2 d-inline-block"></i>
}

function Title({title, icon}:{title:string, icon:string}){
    return(
        <div className="container-fluid important fs-2 text-center">
            <span>{title}</span>
            {icon && <i className={icon}></i>}
        </div>
    )
}

function ProgressBar({progress}:{progress:number}){
    return(
        <div className="container-fluid py-2 border-bottom border-top border-black">
            <div className="text-center fs-5">Step {progress}/4</div>
            <div className="segmented-progress container-fluid m-2">
                <div className={`segment ${progress >= 1 ? "done" : ""}`}>
                    <div className="text-center small mt-3">Pharmacy</div>
                </div>
                <div className={`segment ${progress >= 2 ? "done" : ""}`}>
                    <div className="text-center small mt-3">Date</div>
                </div>
                <div className={`segment ${progress >= 3 ? "done" : ""}`}>
                    <div className="text-center small mt-3">Time</div>
                </div>
                <div className={`segment ${progress >= 4 ? "done" : ""}`}>
                    <div className="text-center small mt-3">Submit</div>
                </div>
            </div>
        </div>
    )
}

function Label({name, item, onClick}:{name:string, item:any, onClick:() => void}){
    return(
        <button className="btn-white border-top-0 border-end-0 border-start-0 justify-content-between d-flex align-items-center fs-4 p-3"
                onClick={onClick}>
            <div>{name}</div>
            <div className="mx-3">{item}</div>
        </button>
    )
}

function Summary({section, name, item, onClick}:{section:string, name:string, item:any, onClick:() => void}){
    return(
        <button className="btn-white border-top-0 border-end-0 border-start-0 justify-content-between d-flex align-items-center p-3 border border-black"
                onClick={onClick}>
            <div className="flex flex-column">
                <div className="fs-4 mb-1 text-start">{section}</div>
                <div className="fs-5 text-start">{name}</div>
            </div>
            <div className="mx-3">{item}<span className="d-block">Edit</span></div>
        </button>
    )
}

export default function Schedule({contrast, toggleContrast}:{contrast:boolean, toggleContrast:any}){
    const [stage,setStage] = useState(1)
    const [pharmacy,setPharmacy] = useState("")
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Layout page="Schedule Refill" tooltip="Schedule a refill for any prescriptions that need it. Note: Your progress is not saved upon leaving."
                current={0} contrast={contrast} toggleContrast={toggleContrast}>
            {stage==1 && (<>
                <Title title="Schedule Refill for Medication 1" icon=""/>
                <ProgressBar progress={1} />
                <Label name="Choose Pharmacy" item={<Arrow />} onClick={() => setStage(2)}/>
            </>)}

            {stage==2 && (<>
                <Title title="Choose Pharmacy" icon="bi bi-prescription d-block"/>
                <Label name="CVS Pharmacy" item="(0.4 mi)" onClick={() => {setPharmacy("CVS (0.4 mi)");setStage(3)}}/>
                <Label name="Walgreens" item="(1.2 mi)" onClick={() => {setPharmacy("Walgreens (1.2 mi)");setStage(3)}}/>
                <Label name="Giants Pharmacy" item="(3.1 mi)" onClick={() => {setPharmacy("Giants (3.1 mi)");setStage(3)}}/>
            </>)}

            {stage==3 && (<>
                <Title title="Schedule Refill for Medication 1" icon=""/>
                <ProgressBar progress={2} />
                <Summary section={"Pharmacy:"} name={pharmacy} item={<Pencil />} onClick={() => setStage(2)}/>
                <Label name="Choose Date" item={<Arrow />} onClick={() => setStage(4)}/>
            </>)}

            {stage==4 && (<>
                <Title title="Choose Date" icon="bi bi-calendar2-event-fill d-block"/>
                <Label name="3/26/26" item="Thursday" onClick={() => {setDate("3/26/26");setStage(5)}}/>
                <Label name="3/27/26" item="Friday" onClick={() => {setDate("3/27/26");setStage(5)}}/>
                <Label name="3/28/26" item="Saturday" onClick={() => {setDate("3/28/26");setStage(5)}}/>
            </>)}

            {stage==5 && (<>
                <Title title="Schedule Refill for Medication 1" icon=""/>
                <ProgressBar progress={3} />
                <Summary section={"Pharmacy:"} name={pharmacy} item={<Pencil />} onClick={() => setStage(2)}/>
                <Summary section={"Date:"} name={date} item={<Pencil />} onClick={() => setStage(4)}/>
                <Label name="Choose Time" item={<Arrow />} onClick={() => setStage(6)}/>
            </>)}

            {stage==6 && (<>
                <Title title="Choose Time" icon="bi bi-clock-fill d-block"/>
                <Label name="7:00 AM" item="" onClick={() => {setTime("7:00 AM");setStage(7)}}/>
                <Label name="2:00 PM" item="" onClick={() => {setTime("2:00 PM");setStage(7)}}/>
                <Label name="5:00 PM" item="" onClick={() => {setTime("5:00 PM");setStage(7)}}/>
            </>)}

            {stage==7 && (<>
                <Title title="Schedule Refill for Medication 1" icon=""/>
                <ProgressBar progress={4} />
                <Summary section={"Pharmacy:"} name={pharmacy} item={<Pencil />} onClick={() => setStage(2)}/>
                <Summary section={"Date:"} name={date} item={<Pencil />} onClick={() => setStage(4)}/>
                <Summary section={"Time:"} name={time} item={<Pencil />} onClick={() => setStage(6)}/>
                <div className="container p-2 d-flex justify-content-center align-items-center">
                    <button className="m-2 p-2 d-block text-start fs-5 important border-0 rounded" 
                            onClick={() => setIsOpen(true)}>
                    Submit Refill</button>
                </div>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="position-relative">
                    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50" onClick={() => setIsOpen(false)}/>
                    <div className="position-fixed top-50 start-50 translate-middle w-100" style={{ maxWidth: "400px" }}>
                        <DialogPanel className="bg-white p-4 rounded shadow">
                        <DialogTitle className="fs-4 fw-bold">
                            Confirm Refill
                        </DialogTitle>
                        <Description className="mt-2">
                            Please confirm the details below to ensure your refill details are correct.
                        </Description>
                        <p className="mt-2">
                            <span className="fw-bold">Pharmacy</span>: {pharmacy}<br/>
                            <span className="fw-bold">Date</span>: {date}<br/>
                            <span className="fw-bold">Time</span>: {time}
                        </p>
                        <div className="mt-3 d-flex justify-content-between gap-2">
                            <button className="btn btn-secondary p-3" onClick={() => setIsOpen(false)}>Cancel</button>
                            <button className="important border-0 rounded p-3" onClick={() => {setIsOpen(false); setStage(8);}}>Confirm</button>
                        </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </>)}

            {stage==8 && (<>
                <Title title="Success!" icon="bi bi-check-square-fill d-block"/>
                <div className="container-fluid d-flex align-items-center justify-content-center text-center fs-3 py-5">
                    <p>You have successfully scheduled your refill. Please be sure to pick it up at {pharmacy} on {date} at {time}.</p>
                </div>
            </>)}
        </Layout>
    );
}