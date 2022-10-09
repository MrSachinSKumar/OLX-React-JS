import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import MyProfile from './Pages/MyProfile'
import ViewPost from './Pages/ViewPost';
import ViewAd from './Pages/ViewAd';
import Ads from './Pages/Ads'
import Settings from './Pages/Settings'
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';
import './App.css';
import Profile from './Pages/Profile';
import CreateAd from './Components/Create/CreateAd'
import Edit from './Pages/Edit';

function App() 
{
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>
    {
      setUser(user)
    })
  })
  
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route element={<Home />} exact path='/'/>
          <Route element={<Signup/>} path='/signup'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Create/>} path='/create'/>
          <Route element={<ViewPost/>} path='/view'/>
          <Route element={<Ads/>} path='/myads/:userId'/>          
          <Route element={<Profile/>} path='/profile/:userId'/>
          <Route element={<Settings/>} path='/settings'/>
          <Route element={<CreateAd/>} path='/post'/>
          <Route element={<ViewAd/>} path='/view-ad'/>
          <Route element={<Edit/>} path='/edit/:productId'/>
          <Route element={<MyProfile/>} path='/my-profile'/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
