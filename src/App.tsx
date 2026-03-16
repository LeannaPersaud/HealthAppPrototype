import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Medication from "./pages/Medication";
import DoandDont from './pages/DoandDont';
import Calendar from './pages/Calendar';
import Schedule from './pages/ScheduleRefill';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Medication" element={<Medication />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/DoandDont" element={<DoandDont />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </div>
  )
}

export default App
