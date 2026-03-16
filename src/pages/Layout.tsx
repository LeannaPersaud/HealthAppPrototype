import { Link, useNavigate } from 'react-router-dom';

function TimeBar(){
    return (
        <div className="d-flex justify-content-between pt-1">
            <div className="container-fluid d-flex justify-content-start px-3" style={{maxHeight: "1vh"}}>
                9:41
            </div>
            <div className="container-fluid d-flex justify-content-end px-3">
                <i className="bi bi-bar-chart p-1"></i>
                <i className="bi bi-wifi p-1"></i>
                <i className="bi bi-battery-full p-1"></i>
            </div>
        </div>
    )
}

function TitleBar({name}:{name: string}){
    const navigation = useNavigate();

    function handleBack(){
        navigation(-1)
    }

    return(
        <div className="d-flex align-items-center position-relative py-0">
            <div className="position-absolute start-0 fs-3 p-2" id='back-button' onClick={handleBack}><i className="bi bi-arrow-left-short"></i></div>
            <div className="flex-grow-1 text-center fs-5 fw-bold">{name}</div>
        </div>
    )
}

function Navigation(){
    return(
        <>
        <div className="container-fluid px-3 py-0 border-top border-black">
            <div className="row text-center">
                <div className="col">
                    <button type="button" className="btn border-0" disabled>
                        <i className="bi bi-person-fill clickable-icon fs-1"></i>
                    </button>
                </div>
                <div className="col">
                    <Link to="/"><button type="button" className="btn border-0">
                        <i className="bi bi-house-door-fill clickable-icon fs-1"></i>
                    </button></Link>
                </div>
                <div className="col">
                    <Link to="/DoandDont"><button type="button" className="btn border-0">
                        <i className="bi bi-clipboard2-fill clickable-icon fs-1"></i>
                    </button></Link>
                </div>
                <div className="col">
                    <Link to="/Calendar"><button type="button" className="btn border-0">
                        <i className="bi bi-calendar-event-fill clickable-icon fs-1"></i>
                    </button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

function Layout({page, children}:{page: string, children: any}){
    return(
        <div className="d-flex flex-column min-vh-100">
            <TimeBar />
            <TitleBar name={page} />
            <main className="flex-grow-1 d-flex flex-column">{children}</main>
            <Navigation />
        </div>
    )
}

export default Layout