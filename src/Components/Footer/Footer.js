import React from 'react';
import './Footer.css';
import {} from '@mui/material'
import { FacebookRounded, Instagram, Twitter, YouTube } from '@mui/icons-material';
import {IconButton} from '@mui/material'

function Footer()
{
  return (
    <div className="footerParentDiv">
      <div className="content">

          <div className="list">
              <p>POPULAR LOCATIONS</p>
            <ul>
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>

        <div>
          <div className="list">
            <p>TRENDING LOCATIONS</p>
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="list">
            <p>ABOUT US</p>
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
              <li>Waah Jobs</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="list">
            <p>OLX</p>
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
          <div className="list2">
            <div className="follow">
              <p>FOLLOW US</p>
            </div>
            <div className='socialmedia_icon'>
              <IconButton href='https://www.facebook.com/olxindia/'>
                <FacebookRounded/>
              </IconButton>    
              <IconButton href='https://www.instagram.com/olx_india/'>
                <Instagram/>
              </IconButton>   
              <IconButton href='https://twitter.com/OLX_India'>
                <Twitter/>
              </IconButton>   
              <IconButton href='https://www.youtube.com/user/OLXInTv'>
                <YouTube/>
              </IconButton>   
            </div>
            <div className='icons'>
              <a href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                <img width="80" height="26" src="../../Images/play-store1.png" alt=""/>
              </a>
              <a href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792">
                <img width="80" height="26" src="../../Images/apple-store.png" alt=""/>
              </a>
            </div>
              
            </div>
          </div>
      <div className="footer">
        <div className='other'>
          <p>Other Countries</p>
        </div>
        <div className='countries'> 
          <p>Pakistan - South Africa - Indonesia</p>
        </div>
        <div className='rights'> 
          <p>All rights reserved © 2006-2022 OLX</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
