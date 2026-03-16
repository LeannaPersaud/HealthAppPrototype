import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

function ClickLabel({name, description, refill}:{name:string, description:string, refill:Boolean}){
  return(
    <Disclosure>
      <DisclosureButton className="container-fluid py-1 fs-3 border-top-0 border-end-0 border-start-0 border-bottom border-black border-2 bg-white">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center fs-3 p-2">
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

export default function Profile() {
  return(
    <Layout page="Medication">
      <ClickLabel name="Medication 1" description="Medicine 1 runs out on 3/25/26 and needs to be refilled." refill={true}/>
      <ClickLabel name="Medication 2" description="Medicine lasts for 2 more weeks." refill={false}/>
      <ClickLabel name="Medication 3" description="Medicine lasts for 2 more weeks." refill={false}/>
      <ClickLabel name="Medication 4" description="Medicine lasts for 2 more weeks." refill={false}/>
    </Layout>
  )
}