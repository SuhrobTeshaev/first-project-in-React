import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogContainer from './components/dialog/dialogContainer';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import UsersContainer from './components/users/usersContainer';



const App = (props) => {
  return (
   
      <div className='app-wrapper' >
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/dialog' element = {
              <DialogContainer />} />
            <Route path='/profile' element={
              <Profile/>} />
             <Route path='/users' element={
              <UsersContainer/>} /> 
          </Routes>

        </div>
      </div>
    

  );
}

export default App;
