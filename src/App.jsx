import React from 'react'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from "./pages/Account"
import FullInfo from './components/Account/FullIinfo';
import Application from './pages/Application'
import Entrance from './pages/Entrance';
import EntryPage from './components/Entrance/EntryPage';
import PersonalInform from './components/Entrance/PersonalInform';
import EducationalInform from './components/Entrance/EducationalInform';
import ChoosenSpecialty from './components/Entrance/ChoosenSpecialty';
import PrivilegeInform from './components/Entrance/PrivilegeInform';
import Stepper from './components/Entrance/Stepper';

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <div className="row"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrance" element={<Entrance />}>
            <Route path="" element={<EntryPage />}></Route>
            <Route path="stepper" element={<Stepper />}>
              <Route path="" element={<PersonalInform />}></Route>
              <Route path="educations" element={<EducationalInform />}></Route>
              <Route path="specialty" element={<ChoosenSpecialty />}></Route>
              <Route path="privilege" element={<PrivilegeInform />}></Route>
            </Route>
          </Route>
          <Route path="/account" element={<Account />}>
            <Route path="/account" element={<Application />}/>
            <Route path="full-info" element={<FullInfo />}/>
          </Route>

        </Routes>
        <div className="row"><Footer /></div>
      </BrowserRouter>
      {/* <BrowserRouter>
        <div className="row"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrance" element={<Entrance />}>
            <Route path="" element={<EntryPage />}></Route>
            <Route path="personal" element={<PersonalInform />}></Route>
            <Route path="educations" element={<EducationalInform />}></Route>
            <Route path="specialty" element={<ChoosenSpecialty />}></Route>
            <Route path="privilege" element={<PrivilegeInform />}></Route>
          </Route>
          <Route path="/account" element={<Account />}>
            <Route path="" element={<Application />}></Route>
            <Route path="full-info" element={<FullInfo />}></Route>
          </Route>

        </Routes>
        <div className="row"><Footer /></div>
      </BrowserRouter> */}
    </div>
  )
}
