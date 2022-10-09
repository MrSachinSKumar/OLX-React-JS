import React, { useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { Avatar, IconButton } from '@mui/material';
import { ChatBubbleOutlineOutlined, KeyboardArrowDown, MyLocation, NotificationsNoneOutlined } from '@mui/icons-material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Banner/Banner.css'

function Header() 
{
  const {user} = useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>navigate('/')} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='Search city , area or locality' />
          <Popup contentStyle={{ width: '20%',
                                height: '54%',
                                overflowX:'hidden',
                                overflowY:'scroll',
                              background: 'White',
                              border: '1px solid #dedede',
                             }} 
                                className='my-popup-content' trigger={
                                <IconButton>
                                <KeyboardArrowDown/>
                                </IconButton>} 
                          
                          position="bottom right">
            <div className='place_body'>
              <div className='place_header'>
                <MyLocation/>
                <div className='place_details'>
                  <p>Use current location</p>
                  <p1>Location blocked.Check</p1>
                  <br />
                  <p2>browser/phone settings.</p2>
                </div>
              </div>
              <div className='location'>
                  <p>POPULAR LOCATIONS</p>
                  <p>RECENT LOCATIONS</p>
              </div>
              {/* <div className='location_name'>
                <LocationOn/>
                <p>Kerala</p>
              </div>
              <div className='location_name'>
                <LocationOn/>
                <p>Tamil Nadu</p>
              </div>
              <div className='location_name'>
                <LocationOn/>
                <p>Punjab</p>
              </div>
              <div className='location_name'>
                <LocationOn/>
                <p>Maharashtra</p>
              </div> */}
            </div>
          </Popup>
          {/* <Arrow></Arrow> */}
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
        {/* <span> ENGLISH </span> */}
        <div className="select_language">
            <input value="ENGLISH" type="text" />    
            <Popup contentStyle={{ width: '15%',
                                  height: '18%',
                                  background: 'White',
                                  border: '1px solid #dedede',
                                  borderRadius: '4px'  }} 
            className='my-popup-content' trigger={
              <IconButton>
              <KeyboardArrowDown/>
              </IconButton>} 
              position="bottom center">
            <div className='language_settings'>
                <p>ENGLISH</p>
                <p>HINDI</p>
            </div>
          </Popup>
        </div>
        </div>
        { user?
        <div className='chat'>
          <IconButton>
          <ChatBubbleOutlineOutlined/>
          </IconButton>
        </div>
        : ""}
        { user ?
        <div className='notification'>
          <IconButton>
          <NotificationsNoneOutlined/>
          </IconButton>
        </div>
        :""}
        <div className="loginPage">
          {/* <span className='user' onClick={()=>navigate('/login')}>{ user? user.displayName : <span className='login'>Login</span>}</span> */}
          {/* <span className='user' onClick={()=>navigate('/login')}></span> */}
            { user ?
            <div>
                {/* <IconButton onClick={getUserDetails}> */}
                <IconButton>
                    <Avatar src='{user?.photoURL}'/>
                </IconButton>
            </div>
             : <span onClick={()=>navigate('/login')} className='login'>Login</span> }  
            { user ? "" : <hr/> } 
        </div>
        {user ? 
        <div className='pop'>
          <Popup contentStyle={{ width: '20%',
                                height:'65%',
                                background: 'White',
                                border: '1px solid #dedede',
                                borderRadius: '4px',  }} 
                                className='my-popup-content' trigger={<IconButton>
                          <KeyboardArrowDown/>
                          </IconButton>} 
                          position="bottom right">
                            <div className='popup-arrow'>
                                
                            </div>
            <div className='profile_popup'>
              <div className='avatar'>
                <Avatar/>
              </div>
              {/* <div className='settings'>
                
              </div> */}
              
              <div className='settings'>
                <p>Hello,</p>
                <h5>{ user ? user.displayName : ""}</h5>
                {/* <a href="" onClick={()=>navigate('/profile')}>View and edit profile</a> */}
                  <span onClick={()=>navigate(`/profile/${user.uid}`)}>View and edit profile</span>
              </div>
            </div>
            <div className='popup_others'>
                  {/* <p onClick={()=>navigate('/myads')}>My Ads</p> */}
                  <p onClick={()=>{
                                  navigate(`/myads/${user.uid}`)
                                  }}>My Ads</p>
                  <p>Buy Business Packages</p>
                  <p>Bought Packages & Billing</p>
                  <p>Help</p>
                  <p onClick={()=>navigate('/settings')}>Settings</p>
                  <p1  onClick={()=>
                        {
                        firebase.auth().signOut()
                        navigate('/')
                        }}>Logout</p1>
            </div>
          </Popup>
        </div> : ""}
          {/* {user && <span className='logout' onClick={()=>
          {
            firebase.auth().signOut()
            navigate('/login')
          }}>Logout</span>} */}
        <div onClick={ user ? ()=>navigate('/create') : ()=>navigate('/login')} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <div className="sellButton">
              <SellButtonPlus></SellButtonPlus>
            </div>
            <div className="sell">
              {/* <span onClick={ user ? ()=>navigate('/post') : ()=>navigate('/login')}>SELL</span> */}
              <span>SELL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
