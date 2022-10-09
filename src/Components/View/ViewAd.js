import { ArrowForwardIosTwoTone, FavoriteBorderTwoTone, LocalPhoneTwoTone, Share } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../Store/Context'
import { PostContext } from '../../Store/PostContext'
import './View.css';

function ViewAd() 
{
  const {postDetails} = useContext(PostContext)
  const {firebase}= useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const navigate=useNavigate()
  const {setPostDetails}=useContext(PostContext)

  useEffect(() => 
  {
    firebase.firestore().collection('products').get().then((snapshot)=>
    {
      const allPost=snapshot.docs.map((product)=>
      {
        return{
          ...product.data(),
          id:product.id
        }
      })
      setProducts(allPost)
    })
  },[firebase])

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

     
     <div className="related_ads">
        <div className="related_ads_heading">
          <p>Related ads</p>
        </div>
        <div className="ads_cards">
        {
          products.map(product=>
          {
            return(
              <div onClick={()=>
                {
                  setPostDetails(product)
                  navigate('/view-ad')
                }} className="related_ads_card">
            <div className='related_card_heading'>
                <IconButton>
                    <FavoriteBorderTwoTone/>
                </IconButton>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.title}</span>
              <p className="name">{product.type}</p>
            </div>
            <div className="related_ads_date">
              <p>{postDetails.city}, {postDetails.state}</p>
              <div className='ad_posted_date_details'>
                <p>{postDetails.createdAt}</p>
              </div>
            </div>
          </div>
              )
          })
        }
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
          <div className="productDetails_featured">
            <p>FEATURED</p>
            <IconButton>
              <Share/>
            </IconButton>
            <div className='favorite_ad_icon'>
                <IconButton>
                    <FavoriteBorderTwoTone/>
                </IconButton>
            </div>
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
    { postDetails && <div className="ad_contact_details">
       {/* <p>Seller details</p>
       <p>{userDetails.username}</p>
       <p>{userDetails.phone}</p> */}
        <p>Seller description</p>
         <div className='posted_user_details'>
            <Avatar/>
           <div className='ad_user_details'>
             <p>{postDetails.userName}</p>
             <p1>Member since</p1>
           </div>
           <IconButton>
             <ArrowForwardIosTwoTone/>
           </IconButton> 
         </div>
         <div className='seller_chat'>
           <button>Chat with seller</button>
         </div>
         <div className='seller_contact'>
            <IconButton>
                <LocalPhoneTwoTone/>
            </IconButton>
            {postDetails.number ? <p>{postDetails.number}</p> :  <p>*** **** ***</p> }
           
            {/* <a href="">Show number</a> */}
         </div>
     </div>}
     <div className='posted_in'>
       <p1>Posted in</p1>
       <p>{postDetails.neighbourhood}</p>
     </div>
     <div className='ad_id'>
        <p>AD ID : {postDetails.id}</p>
        <div className='report_ad'>
            <p>REPORT THIS AD</p>
        </div>
     </div>
   </div>
 </div>
  )
}

export default ViewAd