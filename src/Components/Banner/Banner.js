import React from 'react';
import './Banner.css';
import Arrow from '../../assets/Arrow'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IconButton } from '@mui/material';
import { KeyboardArrowDownSharp } from '@mui/icons-material';
function Banner() 
{
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Popup contentStyle={{ width: '95%',
                                  height: '99%',
                                  background: 'White',
                                  border: '1px solid #dedede',
                                  borderRadius: '4px',
                                  marginLeft: '-8rem' ,
                                  // paddingLeft: '10rem',
                                }} 
            className='category_dropdown' trigger={
                          <IconButton>
                          <KeyboardArrowDownSharp/>
                          </IconButton>} 
               position="bottom left"
              >
              <div className='popup-arrow' >
              </div>
            <div className='all_category'>
              <div className='first_row'>
                <div className='property_div'>
                  <div className='property_heading'>
                    <p>OLX Autos (Cars)</p>
                  </div>
                </div>
                <div className='property_div'>
                  <div className='property_heading'>
                    <p>Properties</p>
                  </div>
                  <p>For Sale: Houses & Apartments</p>
                  <p>For Rent: Houses & Apartments</p>
                  <p>Lands & Plots</p>
                  <p>For Rent: Shops & Offices</p>
                  <p>For Sale: Shops & Offices</p>
                  <p>PG & Guest Houses</p>
                </div>
                <div className='property_div'>
                  <div className='property_heading'>
                    <p>Mobiles</p>
                  </div>
                  <p>Mobile Phones</p>
                  <p>Accessories</p>
                  <p>Tablets</p>
                </div>
              </div>
              <div className='second_row'>
                <div className='property_div'>
                  <div className='property_heading'>
                    <p>Jobs</p>
                  </div>
                  <p>Data entry & Back office</p>
                  <p>Sales & Marketing</p>
                  <p>BPO & Telecaller</p>
                  <p>Driver</p>
                  <p>Office Assistant</p>
                  <p>Delivery & Collection</p>
                  <p>Teacher</p>
                  <p>Receptionist & Front office</p>
                  <p>Operator & Technician</p>
                  <p>IT Engineer & Developer</p>
                  <p>Hotel & Travel Executive</p>
                  <p>Accountant</p>
                  <p>Designer</p>
                  <p>Other Jobs</p>
                </div>
                <div className='property_div'>
                  <div className='property_heading'>
                    <p>Bikes</p>
                  </div>
                  <p>Motorcycles</p>
                  <p>Scooters</p>
                  <p>Spare Parts</p>
                  <p>Bicycles</p>
                </div>
              </div>
                <div className='third_row'>
                  <div className='property_div'>
                    <div className='property_heading'>
                      <p>Electronics & Appliances</p>
                    </div>
                    <p>TVs, Video - Audio</p>
                    <p>Kitchen & Other Appliances</p>
                    <p>Computers & Laptops</p>
                    <p>Cameras & Lenses</p>
                    <p>Games & Entertainment</p>
                    <p>Fridges</p>
                    <p>Computer Accessories</p>
                    <p>Hard Disks, Printers & Monitors</p>
                    <p>ACs</p>
                    <p>Washing Machines</p>
                  </div>
                  <div className='property_div'>
                    <div className='property_heading'>
                      <p>Commercial Vehicles & Spares</p>
                    </div>
                    <p>Commercial & Other Vehicles</p>
                    <p>Spare Parts</p>
                  </div>
                  <div className='property_div'>
                    <div className='property_heading'>
                      <p>Furniture</p>
                    </div>
                    <p>Sofa & Dining</p>
                    <p>Beds & Wardrobes</p>
                    <p>Home Decor & Garden</p>
                    <p>Kids Furniture</p>
                    <p>Other Household Items</p>
                  </div>
                </div>
                <div className='fourth_row'>
                  <div className='property_div'>
                    <div className='property_heading'>
                      <p>Fashion</p>
                    </div>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Books, Sports & Hobbies</p>
                    <p>Books</p>
                    <p>Gym & Fitness</p>
                    <p>Musical Instruments</p>
                    <p>Sports Equipment</p>
                    <p>Other Hobbies</p>
                  </div>
                  <div className='property_div'>
                    <div className='property_heading'>
                      <p>Pets</p>
                    </div>
                    <p>Fishes & Aquarium</p>
                    <p>Pet Food & Accessories</p>
                    <p>Dogs</p>
                    <p>Other Pets</p>
                  </div>
                  <div className='service_div'>
                    <div className='property_heading'>
                      <p>Services</p>
                    </div>
                    <p>Electronics & Computer</p>
                    <p>Education & Classes</p>
                    <p>Drivers & Taxi</p>
                    <p>Health & Beauty</p>
                    <p>Other Services</p>
                  </div>
                </div>
            </div>
          </Popup>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: Houses & Apartments</span>
          </div>
        </div>
        {/* <div className="banner">
          <img src="../../../Images/banner copy.png" alt=""/>
          <img src="../../../Images/New Banner.png" alt=""/>
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
