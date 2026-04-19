import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

function ClickLabel({name, description, refill}:{name:string, description:string, refill:Boolean}){
  return(
    <Disclosure>
      <div className="d-flex flex-column">
      <DisclosureButton className="container-fluid border-top-0 border-end-0 border-start-0 border-bottom-0 rounded rounded-2">
        <div className="d-flex align-items-center justify-content-between w-100" style={{fontSize: "large"}}>
          <div className="d-flex align-items-center p-2">
            <i className="bi bi-capsule clickable-icon m-2"></i>
            {name}
          </div>
          <div className="d-flex align-items-center">
            {refill && <i className="bi bi-exclamation-circle-fill m-2 text-danger"></i>}
            <i className="bi bi-caret-down-fill dropdown m-2 d-inline-block"></i>
          </div>
        </div>
      </DisclosureButton>
      
      <DisclosurePanel className={` mx-3 pt-2 px-4 border-bottom border-start border-end rounded-1 fs-6`} style={{backgroundColor: "#e9ecef"}}>
        {refill && <i className="bi bi-exclamation-circle-fill m-2 text-danger"></i>}
        {description}
        {refill && <Link to="/Schedule" className="links"><button className="my-2 d-block text-start important border-0 rounded">
          Refill Medication <i className="bi bi-caret-right-fill m-2 d-inline-block"></i></button></Link>}
      </DisclosurePanel>
    </div>
    </Disclosure>
  )
}

export default function Medication({contrast, toggleContrast}:{contrast:boolean, toggleContrast:any}) {
  const today = new Date()
  const todayStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`

  return(
    <Layout page="Medication" tooltip="Includes info about your prescription, refills, medicine-specific side effects, etc."
         current={0} contrast={contrast} toggleContrast={toggleContrast}>
          <div className="d-flex justify-content-center m-1">
            <div className="card card-border" style={{ maxWidth: "400px", width: "400px"}}>
              <div className="card-body p-2 d-flex flex-column gap-2">
                  <h5 className="card-title mb-1">Summary</h5>
                  <ul>
                    <li>1 Medication needs to be refilled</li>
                    <li>2 Medications are active and will need to be refilled in 2 weeks</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center m-3">
            <div className="card card-border-red">
              <div className="card-body p-2 d-flex flex-column gap-2">
                  <h5 className="card-title mb-1" style={{fontSize: "large"}}>Needs Attention</h5>
                  <ClickLabel name="Medication 1" description={`Medicine 1 runs out on ${todayStr} and needs to be refilled.`} 
                            refill={true}/>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center m-3">
            <div className="card card-border-active">
              <div className="card-body p-2 d-flex flex-column gap-2">
                  <h5 className="card-title mb-1" style={{fontSize: "large"}}>Active Medication</h5>
                  <ClickLabel name="Medication 2" description="Medicine lasts for 2 more weeks. Remember to take one in the morning with food!" 
                            refill={false}/>
                  <ClickLabel name="Medication 3" description="Medicine lasts for 2 more weeks. Remember to take one at night with food!" 
                            refill={false}/>
              </div>
            </div>
          </div>

            <div className="d-flex justify-content-center m-3">
            <div className="card card-border-past">
              <div className="card-body p-2 d-flex flex-column gap-2">
                  <h5 className="card-title mb-1" style={{fontSize: "large"}}>Past Medication</h5>
                  <ClickLabel name="Medication 4" description="Medicine was prescribed for an ear infection on 2/13/26 and finished 2/20/26." 
                              refill={false}/>
              </div>
            </div>
          </div>
    </Layout>
  )
}