import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

function ClickLabel({name, description, refill}:{name:string, description:string, refill:Boolean}){
  return(
    <Disclosure>
      <DisclosureButton className="container-fluid fs-4 border-top-0 border-end-0 border-start-0 border-bottom border-black border-2 bg-white">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center  fs-4 p-2">
            <i className="bi bi-capsule clickable-icon fs-2 m-2"></i>
            {name}
          </div>
          <div className="d-flex align-items-center">
            {refill && <i className="bi bi-exclamation-circle-fill fs-2 m-2 text-danger"></i>}
            <i className="bi bi-caret-down-fill dropdown fs-2 m-2 d-inline-block"></i>
          </div>
        </div>
      </DisclosureButton>
      
      <DisclosurePanel className="fs-5 mx-3 my-2 border-bottom border-secondary">
        {refill && <i className="bi bi-exclamation-circle-fill fs-6 m-2 text-danger"></i>}
        {description}
        {refill && <Link to="/Schedule" className="links"><button className="my-2 d-block text-start fs-6 important border-0 rounded">
          Refill Medication <i className="bi bi-caret-right-fill fs-6 m-2 d-inline-block"></i></button></Link>}
      </DisclosurePanel>
    </Disclosure>
  )
}

export default function Medication() {
  return(
    <Layout page="Medication" tooltip="Includes info about your prescription, refills, medicine-specific side effects, etc." current={0}>
      <div className='important px-3 fs-3'>
          <span className='m-3'>Needs Attention</span>
      </div>
      <ClickLabel name="Medication 1" description="Medicine 1 runs out on 3/25/26 and needs to be refilled." refill={true}/>
      <div className='important px-3 fs-3'>
          <span className='m-3'>Active Medication</span>
      </div>
      <ClickLabel name="Medication 2" description="Medicine lasts for 2 more weeks. Remember to take one in the morning with food!" refill={false}/>
      <ClickLabel name="Medication 3" description="Medicine lasts for 2 more weeks. Remember to take one at night with food!" refill={false}/>
      <div className='important px-3 fs-4'>
          <span className='m-3'>Past Medications</span>
      </div>
      <ClickLabel name="Medication 4" description="Medicine was prescribed for an ear infection on 2/13/26 and finished 2/20/26." refill={false}/>
    </Layout>
  )
}