import './App.css';
import Header from './Coompontent/Header/Header'
import Sidebar from './Coompontent/Sidebar/Sidebar'
import Dashboard from './Coompontent/Dashboard/Dashboard'
import Form from './Coompontent/Form/Form'
import Patient_details from "./Coompontent/Patient_details/Patient_details"
import Patient from "./Coompontent/Patient_details/Patient"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
    {/* <div id="loader"></div> */}
    <Header />
    <Sidebar />

    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/from" element={<Form />}></Route>
      <Route path="/patient-details" element={<Patient_details />}></Route> 
      <Route path="/patient" element={<Patient />}></Route> 

    </Routes>
  </div>
  );
}

export default App;
