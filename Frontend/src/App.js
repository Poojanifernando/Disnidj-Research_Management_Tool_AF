import React from  'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Disni
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
import DocumentSubHome from './components/DocumentSubHome';
import StudentSubHome from './components/StudentSubHome';
import SubmitNavbar from './components/SubmitNavbar';
import StudentAdd from './components/StudentAdd';
//upload templates
import TempUpHome from './components/TempUpHome';
import TempNavbar from './components/TempNavbar';
import TempAdd from './components/TempAdd';
//student view evalution results
import EvaluationResult from './components/EvaluationResult';
import TemplateDownload from './components/TemplateDownload';
import DocumentDownload from './components/DocumentDownload';
import STDdownloads from './components/STDdownloads';
import DocEveResult from './components/DocEveResult';
import DocEveOneResult from './components/DocEveOneResult';
import PreseEveResult from './components/PreseEveResult';
import PresEveOneResult from './components/PresEveOneResult';


//Ramona
import GroupReg from './components/U_GroupReg';
import Groups from './components/U_Groups';
import TopicReg from './components/U_TopicReg';
import Details from './components/U_Details';
import AddArea from './components/A_AddArea';
import UHome from './components/U_Home';
import Ahome from './components/A_Home';
import GroupAdmin from './components/A_Groups';
import Areas from './components/A_Areas';
import ViewAreas from './components/U_Areas';
import Supervisors from './components/A_Supervisors';
import Response from './components/A_Response';


//Anodya

import HomeAnodya from './components/HomeAnodya';
import Registration from './components/Registration';
import Login from './components/Login'; 
import AdminLogin from './components/AdminLogin';   
import StaffLogin from './components/StaffLogin';
import AddTopisPanels from './components/AddTopisPanels'; 
import AddPresentationPanels from './components/AddPresentationPanels';
import AddThesisPanels from './components/AddThesisPanels';  
import ViewTopis from './components/ViewTopis'; 
import ViewThesis from './components/ViewThesis';  
import ViewPresentation from './components/ViewPresentation';   
import Viewallusers from './components/Viewallusers'; 
import UpdateTopics from './components/UpdateTopics'; 
import Updatepresentation from './components/Updatepresentation'; 
import UpdateThesis from './components/UpdateThesis'; 
import Groupids from './components/Groupids'; 
import S_ViewTopis from './components/S_ViewTopis';  
import S_ViewPresentation from './components/S_ViewPresentation';  
import S_ViewThesis from './components/S_ViewThesis';


export default function App() {
  return (
    <div className="App">
    <Router>

      <Routes>

{/* Disni */}
        <Route path="/EveHome" element={<EveHome/>}></Route>
        <Route path="/supervEveHome" element={<SupervEveHome/>}></Route>
        <Route path="/newEvaluationSuperv" element={<EveBySuperv/>}></Route>
        <Route path="/SupervevaluationEdit/:id" element={<SupervEveEdit/>}></Route>
        <Route path="/CheckOneSupervEve/:id" element={<SupervEveOne/>}></Route>

        <Route path="/panelEveHome" element={<PanelEveHome/>}></Route>
        <Route path="/newEvaluationPanel" element={<EveByPanel/>}></Route>
        <Route path="/PanelevaluationEdit/:id" element={<PanelEveEdit/>}></Route>
        <Route path="/CheckOnePanelEve/:id" element={<PanelEveOne/>}></Route>

        <Route path="/StudentSubHome" element={<StudentSubHome/>}></Route>
        <Route path="/SubmitNavbar" element={<SubmitNavbar/>}></Route>
        <Route path="/StudentAdd" element={<StudentAdd/>}></Route>
       
        <Route path="/DocumentSubHome" element={<DocumentSubHome/>}></Route>
        <Route path="/TempUpHome" element={<TempUpHome/>}></Route>
        <Route path="/TempNavbar" element={<TempNavbar/>}></Route>
        <Route path="/TempAdd" element={<TempAdd/>}></Route>

        <Route path="/AdminAdd" element={<AdminAdd/>}></Route>
        <Route path="/AdminUpHome" element={<AdminUpHome/>}></Route>
        <Route path="/UploadNaviAdmin" element={<UploadNavbar/>}></Route>

        <Route path="/EvaluationResult" element={<EvaluationResult/>}></Route>
        <Route path="/TemplateDownload" element={<TemplateDownload/>}></Route>
        <Route path="/DocumentDownload" element={<DocumentDownload/>}></Route>
        <Route path="/STDdownloads" element={<STDdownloads/>}></Route>
        <Route path="/DocEveResult" element={<DocEveResult/>}></Route>
        <Route path="/DocEveOneResult/:id" element={<DocEveOneResult/>}></Route>
        <Route path="/PreseEveResult" element={<PreseEveResult/>}></Route>
        <Route path="/PresEveOneResult/:id" element={<PresEveOneResult/>}></Route>


{/* Ramona */}
        <Route path="/" element={<UHome/>}></Route>
        <Route path="/groupReg" element={<GroupReg/>}></Route>
        <Route path="/groups" element={<Groups/>}></Route>
        <Route path="/topicReg" element={<TopicReg/>}></Route>
        <Route path="/addArea" element={<AddArea/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/adminHome" element={<Ahome/>}></Route>
        <Route path="/view" element={<GroupAdmin/>}></Route>
        <Route path="/Areas" element={<Areas/>}></Route>
        <Route path="/ViewAreas" element={<ViewAreas/>}></Route>
        <Route path="/Supervisors" element={<Supervisors/>}></Route>
        <Route path="/Response/:id" element={<Response/>}></Route>



{/* Anodya */}

                <Route    path = "/HomeAnodya" element = {<HomeAnodya/>}/>  
                <Route    path = "/Registration" element = {<Registration/>}/>
                <Route    path = "/Login" element = {<Login/>}/>  
                <Route    path = "/AdminLogin" element = {<AdminLogin/>}/>  
                <Route    path = "/StaffLogin" element = {<StaffLogin/>}/> 
                <Route     path = "/AddTopisPanels" element = {<AddTopisPanels/>}/>
                <Route     path = "/AddPresentationPanels" element = {<AddPresentationPanels/>}/>   
                <Route     path = "/AddThesisPanels" element = {<AddThesisPanels/>}/> 
                <Route     path = "/ViewTopis" element = {<ViewTopis/>}/>  
                <Route     path = "/ViewThesis" element = {<ViewThesis/>}/>
                <Route     path = "/ViewPresentation" element = {<ViewPresentation/>}/>
                <Route     path = "/Viewallusers" element = {<Viewallusers/>}/>
                <Route     path = "/UpdateTopics/:id" element = {<UpdateTopics/>}/> 
                <Route     path = "/Updatepresentation/:id" element = {<Updatepresentation/>}/> 
                <Route     path = "/UpdateThesis/:id" element = {<UpdateThesis/>}/>   
                <Route     path = "/Groupids" element = {<Groupids/>}/>  
                <Route     path = "/S_ViewTopis" element = {<S_ViewTopis/>}/>  
                <Route     path = "/S_ViewPresentation" element = {<S_ViewPresentation/>}/>  
                <Route     path = "/S_ViewThesis" element = {<S_ViewThesis/>}/>


   </Routes>

</Router>
</div>
);
}