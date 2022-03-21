
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Demo from './Components/Demo';

import About from './Components/About';
import NotFound from './Components/NotFound';
import NavBar1 from './Components/NavBar1';








function Routes1() {
  return (


    <Router>
      
         <nav>
           
     

        <div >

 <NavBar1 />

      </div>
      </nav>
  
      <Routes>
        <Route exact path="/" element={<About/>}/>
        <Route exact path="/Demo" element={<Demo />}/>
      
      
       



        <Route path="*" element={<NotFound/>}/>
      </Routes>
  
  </Router>
  );
}

export default Routes1;
