import Layout from './Layout'
import { useState } from "react";

function Card({label, src, descri}: {label: string, src: string, descri: string}) {
  return(
    <div className='h-100 d-flex justify-content-center'>
      <div className="card card-border" style={{ maxWidth: "350px" }}>
        <img src={src} className="card-img-top"></img>
        <div className="card-body p-2">
            <h6 className="card-title mb-1 text-center">{label}</h6>
            <p className="card-text small mb-0 text-center">{descri}</p>
        </div>
        </div>
    </div>
  )
}

function Dos(){
    return(
        <>
        <div className='row m-3'>
            <div className='col'>
                <Card label="Light Exercises" descri='Walking, stretching, yoga, etc.'
                 src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsNTAwNDA0MjExOTEtaW1hZ2Uta3B2eTRicDYuanBn.jpg'/>
            </div>
           <div className='col'>
               <Card label="Low-Intensity Chores" descri='Sweeping, dusting, dishes, etc.'
                src='https://images.pexels.com/photos/5591853/pexels-photo-5591853.jpeg'/>
            </div>
        </div>
        <div className='row m-3'>
            <div className='col'>
                <Card label="Lightly Spiced Dishes" descri='Soups, dumplings, salads, etc.' 
                src='https://fooddrinkdestinations.com/wp-content/uploads/2023/01/Moroccan-Red-Lentil-Soup-13.jpg'/>
            </div>
            <div className='col'>
                <Card label="Constant Hydration" descri='Regularly drink water' 
                src='https://images.pexels.com/photos/8869251/pexels-photo-8869251.jpeg'/>
            </div>
        </div>
        </>
    )
}

function Donts(){
        return(
        <>
        <div className='row m-3'>
            <div className='col'>
                <Card label="Intensive Exercises" descri='Jogging, weight-lifting, etc.'
                 src='https://www.mychiro.com.au/wp-content/uploads/2021/07/5b80193886dca-1024x683-1.jpeg'/>
            </div>
           <div className='col'>
               <Card label="High-Intensity Chores" descri='Moving, deep cleaning, etc.'
                src='https://stokesremovals.com/wp-content/uploads/2026/02/What-Are-the-Best-Materials-to-Protect-Furniture-When-Moving-1024x683.webp'/>
            </div>
        </div>
        <div className='row m-3'>
            <div className='col'>
                <Card label="Heavily Spiced Dishes" descri='Curries, hot wings, etc.' 
                src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmY0MTY4LWltYWdlLWt3dnlpaWJ2LmpwZw.jpg'/>
            </div>
            <div className='col'>
                <Card label="Drive Long Distances" descri='Avoid driving over a mile away' 
                src='https://www.safetytrack.com/wp-content/uploads/2023/10/pexels-marta-wave-5875895-scaled.jpg'/>
            </div>
        </div>
        </>
    )
}

export default function DoandDont({contrast, toggleContrast}:{contrast:boolean, toggleContrast:any}){
    const [stage,setStage] = useState(0)

    return (
        <Layout page="Dos and Don'ts" tooltip='Discover what activities you should and should not do at the current stage in your recovery.'
         current={2} contrast={contrast} toggleContrast={toggleContrast}>
            <div className="row text-center m-3">
                <div className="col">
                    <button type="button" className="btn btn-success w-100" onClick={()=>setStage(1)}>View Do's</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-danger w-100" onClick={()=>setStage(2)}>View Don'ts</button>
                </div>
            </div>
            {stage==1 && (<Dos/>)}
            {stage==2 && (<Donts/>)}
        </Layout>
    );
}