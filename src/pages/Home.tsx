import Layout from './Layout'
import { Link } from 'react-router-dom';

function Icon({icon, label, active, to}: {icon: string, label: string, active: Boolean, to:string}) {
  return(
    <div className='h-100 d-flex'>
    { active ? 
      (<Link to={to} className='d-flex w-100 h-100 links'><button type="button" className='btn btn-white p-2 h-100 w-100' disabled={!active}>
        <div><i className={icon} style={{fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)"}}></i></div>
        <div>{label}</div>
      </button></Link>
      )
      :
      (<button type="button" className='btn btn-white p-2 h-100 w-100' disabled={!active}>
        <div><i className={icon} style={{fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)"}}></i></div>
        <div>{label}</div>
      </button>)
    } 
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
    <Layout page="Home">
      <div className='flex-grow-1 d-flex flex-column text-center gap-3 justify-content-center'>
        <div className='row flex-grow-1 mx-2' style={{maxHeight: '20vh', maxWidth:'60vh'}}>
          <Column icon={<Icon icon="bi bi-prescription2 clickable-icon " label="Medication" active={true} to="/Medication"/>}/>
          <Column icon={<Icon icon="bi bi-hospital clickable-icon " label="Doctors" active={false} to=""/>}/>
        </div>

        <div className='row flex-grow-1 mx-2' style={{maxHeight: '20vh', maxWidth:'60vh'}}>
          <Column icon={<Icon icon="bi bi-person-walking clickable-icon " label="Physical Therapy" active={false} to=""/>}/>
          <Column icon={<Icon icon="bi bi-journal-medical clickable-icon " label="Wellness Plan" active={false} to=""/>}/>
        </div>

        <div className='row flex-grow-1 mx-2' style={{maxHeight: '20vh', maxWidth:'60vh'}}>
          <Column icon={<Icon icon="bi bi-clipboard2-check-fill clickable-icon " label="Recovery Dos and Don'ts" active={true} to="/DoandDont"/>}/>
          <Column icon={<Icon icon="bi bi-virus2 clickable-icon " label="Common Side Effects" active={false} to=""/>}/>
        </div>
      </div>
    </Layout>
  );
}