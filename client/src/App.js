import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import NavigationBar from './components/navbar'
import StudyTools from './pages/StudyTools'
import HealthAndWellbeing from './pages/HealthAndWellbeing';
import Finance from './pages/Finance';

const App = () => {
return  (
<div>
<Router>
  <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
          <Route exact path="/finance" element={<Finance />} />
          <Route exact path="/health&wellbeing" element={<HealthAndWellbeing />} />
          <Route exact path="/studytools" element={<StudyTools />} />
        </Routes>
</Router>
  

</div>
)}

export default App;