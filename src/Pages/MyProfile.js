import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import MyProfile from '../Components/Profile/MyProfile'

function MyProfilePage() 
{
  return (
    <div>
    <Header/>
    <Banner/>
    <MyProfile/>
    <Footer/>
    </div>
  )
}

export default MyProfilePage