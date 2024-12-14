import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";  
import Signup from "./component/Signup";
import ProfilePage from "./component/profilePage";
import PersonalInfo from "./component/PersonalInfo";







function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route  path="/personalInfo" element={<personalInfo/>}/>
        <Route  path="/profilePage" element={<profilePage/>}/>
      </Routes>
       
    </Router>
    
  );
}

export default App;
