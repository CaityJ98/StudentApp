import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
// import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
const App = () => {
return  (
<div>
<Router>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Router>

</div>
)}

export default App;