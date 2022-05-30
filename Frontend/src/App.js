import React from  'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SupervEveHome from './components/SupervEveHome';
import EveBySuperv from './components/EveBySuperv';
import SupervEveOne from './components/SupervEveOne';
import SupervEveEdit from './components/SupervEveEdit';
import EveHome from './components/EveHome';
import PanelEveHome from './components/PanelEveHome';
import PanelEveEdit from './components/PanelEveEdit';
import EveByPanel from './components/EveByPanel';
import PanelEveOne from './components/PanelEveOne';
//file upload
import AdminAdd from './components/AdminAdd';
import AdminUpHome from './components/AdminUpHome';
import UploadNavbar from './components/UploadNavbar';
//document submit
import StudentSubHome from './components/StudentSubHome';
import SubmitNavbar from './components/SubmitNavbar';
import StudentAdd from './components/StudentAdd';
//upload templates
import TempUpHome from './components/TempUpHome';
import TempNavbar from './components/TempNavbar';
import TempAdd from './components/TempAdd';



export default function App() {
  return (
    <div className="App">
    <Router>

      <Routes>

        <Route path="/" element={<EveHome/>}></Route>
        <Route path="/supervEveHome" element={<SupervEveHome/>}></Route>
        <Route path="/newEvaluationSuperv" element={<EveBySuperv/>}></Route>
        <Route path="/SupervevaluationEdit/:id" element={<SupervEveEdit/>}></Route>
        <Route path="/CheckOneSupervEve/:id" element={<SupervEveOne/>}></Route>

        <Route path="/panelEveHome" element={<PanelEveHome/>}></Route>
        <Route path="/newEvaluationPanel" element={<EveByPanel/>}></Route>
        <Route path="/PanelevaluationEdit/:id" element={<PanelEveEdit/>}></Route>
        <Route path="/CheckOnePanelEve/:id" element={<PanelEveOne/>}></Route>

        <Route path="/AdminAdd" element={<AdminAdd/>}></Route>
        <Route path="/AdminUpHome" element={<AdminUpHome/>}></Route>
        <Route path="/UploadNaviAdmin" element={<UploadNavbar/>}></Route>

        <Route path="/StudentSubHome" element={<StudentSubHome/>}></Route>
        <Route path="/SubmitNavbar" element={<SubmitNavbar/>}></Route>
        <Route path="/StudentAdd" element={<StudentAdd/>}></Route>
       

        <Route path="/TempUpHome" element={<TempUpHome/>}></Route>
        <Route path="/TempNavbar" element={<TempNavbar/>}></Route>
        <Route path="/TempAdd" element={<TempAdd/>}></Route>


    
   </Routes>

</Router>
</div>
);
}