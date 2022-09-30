import { ArrowForwardIosTwoTone, Share } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './View.css';

function View() 
{
  const [userDetails, setUserDetails] = useState([])
  const {postDetails} = useContext(PostContext)
  const {firebase}= useContext(FirebaseContext)
  const {setPostDetails}=useContext(PostContext)
  const navigate=useNavigate()

  useEffect(() => 
  {
    const {userId}=postDetails
   firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>
   {
      response.forEach(document=>{
      setUserDetails(document.data())
    })
   })
  },[firebase,postDetails])
  
  console.log(postDetails);

  const handleDelete=()=>
  {
    if (window.confirm("Are you sure you want to delete?")) 
    {
      firebase.firestore().collection("products").doc(postDetails.id).delete();
      window.alert("Ad deleted");
      navigate('/myads')
    }
  }

  return (
    <div className="viewParentDiv">
       <div className='ad_details_left'>
        <div className="imageShowDiv">
          <img src={postDetails.url} alt=""/>
        </div>
        <div className='imageShowSmall'>

        </div>
        <div className='ad_details_main'>
          {/* <div className='details_heading'>
            <p>Details</p>
          </div> */}
          {/* <div className='details_main_div'>
            <div className='details_main_left'>
              <p>Type</p>
              <p>Bathrooms</p>
              <p>Construction Status</p>
              <p>Super Builtup area (ft²)</p>
              <p>Total Floors</p>
              <p>Facing</p>
            </div>
            <div className='details_main_left'>
              <p>Houses & Villas</p>
              <p>2</p>
              <p>sdsd</p>
              <p>5454</p>
              <p>5</p>
              <p>fggfg</p>
            </div>
            <div className='details_main_left'>
              <p>Bedrooms</p>
              <p>Furnishing</p>
              <p>Listed by</p>
              <p>Carpet Area (ft²)</p>
              <p>Car Parking</p>
            </div>
            <div className='details_main_left'>
              <p>4</p>
              <p>sdfs</p>
              <p>sdsfdf</p>
              <p>445</p>
              <p>1</p>
            </div>
          </div> */}
          
          <div className='details_desc'>
            <div className='desc_heading'>
              <p>Description</p>
            </div>
            <p>{postDetails.description}</p>
          </div>
        </div>
      </div>
      <div className='ad_details_right'>

      </div>
      <div className="rightSection">
        {/* <div className='ad_expire_details'>
          <div className='post_ad'>
            <img src="../../../Images/expiry-logo.png" alt="" />
          </div>
          <div className='post_ad_now'>
            <p>Wait 7 days to post for free or pay to post now</p>
            <button>Post now</button>
          </div>
         
        </div> */}
        <div className="productDetails">
          <div className="productDetails2">
            <p>FEATURED</p>
            <IconButton>
                <Share/>
              </IconButton>
          </div>
          
          <div className='product_price'>
            <p>&#x20B9; {postDetails.price}</p>
          </div>
          
          <span>{postDetails.title} </span>
          <br />
          <p1>{postDetails.type}</p1>
          <div className='ad_posted_place_details'> 
            <p>{postDetails.city}, {postDetails.state}</p>
            <div className='ad_posted_date_details'>
              <p>{postDetails.createdAt}</p>
            </div>
          </div>
          
        </div>
       { userDetails && <div className="contactDetails">
          {/* <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p> */}

            <div className='posted_admin'>
              <Avatar/>
              <div className='admin_details'>
                <p>{postDetails.userName}</p>
                <p1>Member since</p1>
              </div>
              <IconButton>
                <ArrowForwardIosTwoTone/>
              </IconButton> 
            </div>
            {/* <p>Your ad expires on 18/10/22</p> */}
            <div className='ad_edit_button'>
              <button onClick={()=>
                                  {
                                    setPostDetails(postDetails)
                                    navigate('/edit')
                                  }}
                                  >Edit</button>
              <div className='ad_delete_button'>
                <button onClick={handleDelete}>Remove</button>
              </div>
            </div>
        </div>}
        <div className='posted_in'>
          <p1>Posted in</p1>
          <p>{postDetails.neighbourhood}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
