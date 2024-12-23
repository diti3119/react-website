import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from './component/Login';
import Signup from './component/Signup';
import ProfilePage from "./component/ProfilePage";
import PersonalInfo from './component/PersonalInfo';
import Education from './component/Education';








function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route  path="/profilePage" element={<ProfilePage/>}/>
        <Route  path="/personalInfo" element={<PersonalInfo/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;

