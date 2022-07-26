import React from 'react'
import { BrowserRouter as Router, Route, Routes, Component} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import CreateListing from './pages/CreateListing';
import NavigationBar from './components/navbar'
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
return  (
<div>
<Router>
  <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/add-product" element={<CreateListing />} />
         
         
        </Routes>
      </Router>

</div>
)}

export default App;