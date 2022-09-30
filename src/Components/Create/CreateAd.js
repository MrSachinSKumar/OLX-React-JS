import { ArrowBack, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import './Create.css';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import Create from './Create'

function CreateAd() 
{
  const navigate=useNavigate()
  return (
    <div>
      <div className='footer_header'>
        <IconButton onClick={()=>navigate('/')}>
          <ArrowBack />
        </IconButton>
      </div>
      <div className='post_ad'>
        <h4>POST YOUR AD</h4>
      </div>
      <div className='ad_main'>
        <div className='ad_box'>
          <div className='choose_category'>
            <p>CHOOSE A CATEGORY</p>  
          </div>
          <div className='ad_category_body'>
            <div className='ad_category_main'>
              <div className='ad_category'>
                <p>OLX Autos (Cars)</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-8px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p onClick={()=>navigate('/create')} name={'Cars'}>Cars</p>
                </div>
              </div>
            </Popup>
                {/* <IconButton>
                  <ArrowForwardIos/>
                  </IconButton> */}
              </div>
              <div className='ad_category'>
                <p>Properties</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-64px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>For Sale: Houses & Apartments</p>
                </div>
                <div className='post_item'>
                  <p>For Rent: Houses & Apartments</p>
                </div>
                <div className='post_item'>
                  <p>Lands & Plots</p>
                </div>
                <div className='post_item'>
                  <p>For Rent: Shops & Offices</p>
                </div>
                <div className='post_item'>
                  <p>For Sale: Shops & Offices</p>
                </div>
                <div className='post_item'>
                  <p>PG & Guest Houses</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Mobiles</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-120px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Mobile Phones</p>
                </div>
                <div className='post_item'>
                  <p>Accessories</p>
                </div>
                <div className='post_item'>
                  <p>Tablets</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Jobs</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-176px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Data entry & Back office</p>
                </div>
                <div className='post_item'>
                  <p>Sales & Marketing</p>
                </div>
                <div className='post_item'>
                  <p>BPO & Telecaller</p>
                </div>
                <div className='post_item'>
                  <p>Driver</p>
                </div>
                <div className='post_item'>
                  <p>Office Assistant</p>
                </div>
                <div className='post_item'>
                  <p>Delivery & Collection</p>
                </div>
                <div className='post_item'>
                  <p>Teacher</p>
                </div>
                <div className='post_item'>
                  <p>Cook</p>
                </div>
                <div className='post_item'>
                  <p>Receptionist & Front office</p>
                </div>
                <div className='post_item'>
                  <p>Operator & Technician</p>
                </div>
                <div className='post_item'>
                  <p>IT Engineer & Developer</p>
                </div>
                <div className='post_item'>
                  <p>Hotel & Travel Executive</p>
                </div>
                <div className='post_item'>
                  <p>Accountant</p>
                </div>
                <div className='post_item'>
                  <p>Designer</p>
                </div>
                <div className='post_item'>
                  <p>Other Jobs</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Bikes</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-232px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Motorcycles</p>
                </div>
                <div className='post_item'>
                  <p>Scooters</p>
                </div>
                <div className='post_item'>
                  <p>Spare Parts</p>
                </div>
                <div className='post_item'>
                  <p>Bicycles</p>
                </div>
              </div>
            </Popup>

              </div>
              <div className='ad_category'>
                <p>Electronics & Appliances</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-288px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>TVs, Video - Audio</p>
                </div>
                <div className='post_item'>
                  <p>Kitchen & Other Appliances</p>
                </div>
                <div className='post_item'>
                  <p>Computers & Laptops</p>
                </div>
                <div className='post_item'>
                  <p>Cameras & Lenses</p>
                </div>
                <div className='post_item'>
                  <p>Games & Entertainment</p>
                </div>
                <div className='post_item'>
                  <p>Fridges</p>
                </div>
                <div className='post_item'>
                  <p>Computer Accessories</p>
                </div>
                <div className='post_item'>
                  <p>Hard Disks, Printers & Monitors</p>
                </div>
                <div className='post_item'>
                  <p>ACs</p>
                </div>
                <div className='post_item'>
                  <p>Washing Machines</p>
                </div>
              </div>
            </Popup>

              </div>
              <div className='ad_category'>
                <p>Commercial Vehicles & Spares</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-344px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Commercial & Other Vehicles</p>
                </div>
                <div className='post_item'>
                  <p>Spare Parts</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Furniture</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-400px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Sofa & Dining</p>
                </div>
                <div className='post_item'>
                  <p>Beds & Wardrobes</p>
                </div>
                <div className='post_item'>
                  <p>Home Decor & Garden</p>
                </div>
                <div className='post_item'>
                  <p>Kids Furniture</p>
                </div>
                <div className='post_item'>
                  <p>Other Household Items</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Fashion</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-456px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Men</p>
                </div>
                <div className='post_item'>
                  <p>Women</p>
                </div>
                <div className='post_item'>
                  <p>Kids</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Books, Sports & Hobbies</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-512px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Books</p>
                </div>
                <div className='post_item'>
                  <p>Gym & Fitness</p>
                </div>
                <div className='post_item'>
                  <p>Musical Instruments</p>
                </div>
                <div className='post_item'>
                  <p>Sports Equipment</p>
                </div>
                <div className='post_item'>
                  <p>Other Hobbies</p>
                </div>
              </div>
            </Popup>

              </div>
              <div className='ad_category'>
                <p>Pets</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-568px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Fishes & Aquarium</p>
                </div>
                <div className='post_item'>
                  <p>Pet Food & Accessories</p>
                </div>
                <div className='post_item'>
                  <p>Dogs</p>
                </div>
                <div className='post_item'>
                  <p>Other Pets</p>
                </div>
              </div>
            </Popup>
              </div>
              <div className='ad_category'>
                <p>Services</p>
                <Popup contentStyle={{ width: '32%',
                                    height: '100%',
                                    background: 'White',
                                    // border: '1px solid #dedede',
                                    marginTop: '-624px' ,
                                    marginLeft: '-7px'
                                    }} 
              className='my-popup-content' trigger={
                <IconButton>
                <ArrowForwardIos/>
                </IconButton> } 
                position="right top">
              <div className='post_body'>
                <div className='post_item'>
                  <p>Electronics & Computer</p>
                </div>
                <div className='post_item'>
                  <p>Education & Classes</p>
                </div>
                <div className='post_item'>
                  <p>Drivers & Taxi</p>
                </div>
                <div className='post_item'>
                  <p>Health & Beauty</p>
                </div>
                <div className='post_item'>
                  <p>Other Services</p>
                </div>
              </div>
            </Popup>

              </div>
            </div>
            <div></div>
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
            <p>Free Classifieds in India. © 2006-2022 OLX</p>
          </div>
      </div>
    </div>
  )
}

export default CreateAd