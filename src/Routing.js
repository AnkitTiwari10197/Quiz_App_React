
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './home';
import Login from './Components/Login';
import About from './Components/About';
import MultipleInputs from './Components/multipleimput';
import Career from './Components/career';
import Quiz1 from './Components/quiz1';
import Quiz2 from './Components/quiz2';



const Routing = () => {
    return(
       <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/moreinfo" element={<About />} />
                <Route path="/signup_page" element={<MultipleInputs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/quiz" element={<Quiz1/>} />
                <Route path="/quiz2" element={<Quiz1/>} />

            </Routes>
        </Router>
            
        
               
    )
}

export default Routing;


