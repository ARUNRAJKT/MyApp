import React from 'react';
import './App.css';
import Login from '../component/login';
import Register from '../component/register'
import Admin from '../pages/admin';
import User from '../pages/user';
import Userdetails from '../pages/userdetails';
import Fooddonation from '../component/fooddonation';
import Clothdonation from '../component/clothdonation';
import Adddonation from '../pages/adddonation';
import Adddonationtwo from '../pages/adddonationtwo';
import Adddonationthree from '../pages/adddonationthree';
import Bookupdate from '../pages/bookupdate';
import Clothupdate from '../pages/clothupdate';
// import Color from '../component/color'
import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";
// import Usereducer from '../component/usereducer';

function App() {
  return (
    <Router>
    <Routes>
      <Admin/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/reg' element={<Register/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/' element={<User/>}></Route>
      <Route path='/userdetails' element={<Userdetails/>}></Route>
      <Route path='/fooddonation' element={<Fooddonation/>}></Route>
      <Route path='/clothdonation' element={<Clothdonation/>}></Route>
      <Route path='/adddonation' element={<Adddonation/>}></Route>
      <Route path='/adddonationtwo' element={<Adddonationtwo/>}></Route>
      <Route path='/adddonationthree' element={<Adddonationthree/>}></Route>
      <Route path='/bookupdate/:id' element={<Bookupdate/>}></Route>
      <Route path='/clothupdate' element={<Clothupdate/>}></Route>
    </Routes>
  </Router>
  // <Usereducer/>
  );
}

export default App;
