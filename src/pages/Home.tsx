import Layout from './Layout'
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

function Icon({icon, label, active, to, important}: {icon: string, label: string, active: Boolean, to:string, important:boolean}) {
  return(
    <div className='h-100 d-flex'>
    { active ? 
      (<Link to={to} className='d-flex w-100 h-100 links'><button type="button" className='btn btn-white p-2 h-100 w-100'>
        <div className='position-relative'>
          <i className={icon} style={{fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)"}}></i> 
          {important && <i className="bi bi-exclamation-circle-fill text-danger px-1 position-absolute top-0 end-0 fs-3"></i>}
        </div>
        <div>{label}</div>
      </button></Link>
      )
      :
      (
      <button type="button" className={'btn btn-white p-2 h-100 w-100 no-hover'} disabled>
        <div className='position-relative'>
          <i className={icon} style={{fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)"}}></i> 
          <i className="bi bi-tools px-1 position-absolute top-0 end-0 fs-3 work" data-tooltip-id="work-tooltip"></i>
        </div>
        <div>{label}</div>
      </button>
    )} 
    <Tooltip id="work-tooltip" className='work-tooltip' content="Feature is currently a work in progress!" place='top-end'/>
    </div>
  )
}

function Column({icon}: {icon: any}){
  return(
    <div className='col align-self-stretch'>
      {icon}
    </div>
  )
}

export default function Home() {
  return (
    <Layout page="Home" tooltip="Your main hub. Includes info about your medicine, doctors, physical therapy suggestions, a personalized plan for the best recovery, actions to avoid, and common
                                  side effects.">
      <div className='flex-grow-1 d-flex flex-column text-center gap-3 justify-content-center'>
        <div className='row flex-grow-1 mx-2' style={{maxHeight: '20vh', maxWidth:'60vh'}}>
          <Column icon={<Icon icon="bi bi-prescription2 clickable-icon " label="Medication" active={true} to="/Medication" important={true}/>}/>
          <Column icon={<Icon icon="bi bi-hospital clickable-icon " label="Doctors" active={false} to="" important={false}/>}/>
        </div>

        <div className='row flex-grow-1 mx-2' style={{maxHeight: '20vh', maxWidth:'60vh'}}>
          <Column icon={<Icon icon="bi bi-person-walking clickable-icon " label="Physical Therapy" active={false} to="" important={false}/>}/>
          <Column icon={<Icon icon="bi bi-journal-medical clickable-icon " label="Wellness Plan" active={false} to="" important={false}/>}/>
        </div>

        <div className='row flex-grow-1 mx-2' style={{maxHeight: '20vh', maxWidth:'60vh'}}>
          <Column icon={<Icon icon="bi bi-clipboard2-check-fill clickable-icon " label="Recovery Dos and Don'ts" active={true} to="/DoandDont" important={false}/>}/>
          <Column icon={<Icon icon="bi bi-virus2 clickable-icon " label="Common Side Effects" active={false} to="" important={false}/>}/>
        </div>
      </div>
    </Layout>
  );
}