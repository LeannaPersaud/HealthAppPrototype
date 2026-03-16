import Layout from "./Layout";
import { useState } from "react";

function Arrow(){
    return <i className="bi bi-caret-right-fill fs-6 m-2 d-inline-block"></i>
}

function Title({title, icon}:{title:string, icon:string}){
    return(
        <div className="container-fluid important fs-2 text-center">
            <span>{title}</span>
            {icon && <i className={icon}></i>}
        </div>
    )
}

function Label({name, item, onClick}:{name:string, item:any, onClick:() => void}){
    return(
        <button className="btn-white border-top-0 border-end-0 border-start-0 justify-content-between d-flex align-items-center fs-4 p-3"
                onClick={onClick}>
            <div>{name}</div>
            <div>{item}</div>
        </button>
    )
}

export default function Schedule(){
    const [stage,setStage] = useState(1)
    const [pharmacy,setPharmacy] = useState("")
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")

    return (
        <Layout page="Schedule Refill">
            {stage==1 && (<>
                <Title title="Schedule Refill for Medication 1" icon=""/>
                <Label name="Choose Pharmacy" item={<Arrow />} onClick={() => setStage(2)}/>
            </>)}

            {stage==2 && (<>
                <Title title="Choose Pharmacy" icon="bi bi-prescription d-block"/>
                <Label name="CVS Pharmacy" item="(0.4 mi)" onClick={() => {setPharmacy("CVS Pharmacy (0.4 mi)");setStage(3)}}/>
                <Label name="Walgreens" item="(1.2 mi)" onClick={() => {setPharmacy("Walgreens (1.2 mi)");setStage(3)}}/>
                <Label name="Giants Pharmacy" item="(3.1 mi)" onClick={() => {setPharmacy("Giants Pharmacy (3.1 mi)");setStage(3)}}/>
            </>)}

            {stage==3 && (<>
                <Title title="Schedule Refill for Medication 1" icon=""/>
                <Label name={pharmacy} item={<Arrow />} onClick={() => setStage(2)}/>
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
                <Label name={pharmacy} item={<Arrow />} onClick={() => setStage(2)}/>
                <Label name={date} item={<Arrow />} onClick={() => setStage(4)}/>
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
                <Label name={pharmacy} item={<Arrow />} onClick={() => setStage(2)}/>
                <Label name={date} item={<Arrow />} onClick={() => setStage(4)}/>
                <Label name={time} item={<Arrow />} onClick={() => setStage(6)}/>
                <div className="container">
                    <button className="my-2 d-block text-start fs-6 important border-0 rounded" 
                            onClick={() => setStage(8)}>
                    Submit Refill<i className="bi bi-caret-right-fill fs-6 m-2 d-inline-block"></i></button>
                </div>
            </>)}

            {stage==8 && (<>
                <div className="container-fluid d-flex align-items-center justify-content-center text-center fs-3 py-5">
                    <p>You have successfully scheduled your refill. Please be sure to pick it up at {pharmacy} on {date} at {time}.
                    </p>
                </div>
            </>)}
        </Layout>
    );
}