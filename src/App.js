import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";  
import Signup from "./auth/Signup";    
import ProfilePage from "./profile/ProfilePage";
import PersonalInfo from "./profile/PersonalInfo";
import Education from "./profile/Education";






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route  path="/personalInfo" element={<personalInfo/>}/>
        <Route  path="/profilePage" element={<ProfilePage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
