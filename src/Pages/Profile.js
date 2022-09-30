import React from 'react'
import 'reactjs-popup/dist/index.css';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Profile from '../Components/Profile/Profile'

function ProfilePage() 
{
  return (
    <div>
    <Header/>
    <Banner/>
    <Profile/>
    <Footer/>
    </div>
  )
}

export default ProfilePage