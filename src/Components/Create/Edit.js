import { ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../Store/Context'
import { PostContext } from '../../Store/PostContext'

function Edit() 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neighbourhood, setNeighbourhood] = useState('')
    const {firebase}=useContext(FirebaseContext)
    const navigate=useNavigate()
    const {postDetails} = useContext(PostContext)

    const handleSubmit=()=>
    {
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>//name is available because of blob type
      {
        ref.getDownloadURL().then((url)=>
        {
            firebase.firestore().collection('products').doc(postDetails.id).update({
            
            title:title,
            description:description,
            price:price,
            url:url,
            state:state,
            city:city,
            neighbourhood:neighbourhood
        })
        })
    })
    alert("Details updated")
    navigate('/myads')  
    }
  
    const createChat=()=>
    {
        if (window.confirm("Are you sure you want to leave? Your progress will not be saved")) 
        {
          navigate('/myads')
        }
    }
  return (
    <div>
    <div className='footer_header'>
      <IconButton>
        <ArrowBack onClick={createChat}/>
      </IconButton>
    </div>
    <div className='post_ad'>
      <h4>EDIT</h4>
    </div>
      <div className='category_ad_main'>
        {/* <div className='selected_category_name'>
          <p>SELECTED CATEGORY</p>
          <div className='category_ad_name'> */}
            {/* <p>Mobiles/Mobile Phones</p> */}
            {/* <p>{props.name}</p>
            <div className='category_ad_change'>
              <p onClick={()=>navigate('/post')}>Change</p>
            </div>
          </div>
        </div> */}
        <div className='category_ad_details'>
          <div className='category_ad_heading'>
            <p>INCLUDE SOME DETAILS</p>
          </div>
          {/* <p>Type *</p>
          <input type="text"
                  id="type"
                  value={type}
                  onChange={(e)=>setType(e.target.value)}
                  name="type"/> */}
          <div className='category_ad_title_main'>
            <p>Ad title *</p>
            <input  placeholder={postDetails.title}
                    type="text" 
                    id="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    name="title"/>
          </div>
            <p1>A minimum length of 10 characters is required. Please edit the field.</p1>
          <div className='category_ad_desc'>
            <p>Description *</p>
            <input  placeholder={postDetails.description}
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    name="description"/>
            <br />
            <p1>A minimum length of 10 characters is required. Please edit the field.</p1>
          </div>
        </div>
        <div className='category_ad_price'>
          <p>SET A PRICE</p>
          <div className='category_ad_price_details'>
            <p>Price*</p>
            {/* <input type="text" /> */}
            <div className="category_ad_number">
              <p className="category_price_logo">&#x20B9;</p>
              <input placeholder={postDetails.price}
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                            name="price" />
            </div>
          </div>
        </div>
        <div className="category_ad_upload">
          <p>UPLOAD PHOTO</p>

          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):"  "}></img>
          <br />
          <input onChange={(e)=>{
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <div className="category_ad_photo_upload">
            <p>This field is mandatory</p>
          </div>
        </div>
        <div className="category_ad_location">
          <p>CONFIRM YOUR LOCATION</p>
          <div className="category_ad_title">
            <p>State *</p>
            <input placeholder={postDetails.state}
                        type="text"
                          id="state"
                          value={state}
                          onChange={(e)=>setState(e.target.value)}
                          name="state"/>
          </div>
          <div className="category_ad_title">
            <p>City *</p>
            <input  placeholder={postDetails.city}
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    name="city"/>
          </div>
          <div className="category_ad_title">
            <p>Neighbourhood *</p>
            <input  placeholder={postDetails.neighbourhood}
                    type="text"
                    id="neighbourhood"
                    value={neighbourhood}
                    onChange={(e)=>setNeighbourhood(e.target.value)}
                    name="neighbourhood"/>
          </div>
          <p1>This field is mandatory</p1>
        </div>
        {/* <div className="category_admin_title">
          <p>REVIEW YOUR DETAILS</p>
          <div className='category_admin_details'>
            <Avatar/>
            <div className='category_admin'>
              <p>Name</p>
              <input type="text"
                            id="userName"
                            value={user ? user.displayName : ""}
                            onChange={(e)=>setUserName(e.target.value)}
                            name="userName"/>
            </div>
          </div>
          <div className='category_admin_contact_details'>
            <p>Your phone number</p>
            <div className='category_admin_number'>
              <p>+91</p>
              <input type="text"
                      id="number"
                      value={number}
                      onChange={(e)=>setNumber(e.target.value)}
                      name="number" />
            </div>
          </div>
        </div> */}
        <div className='category_ad_post'>
          <button onClick={handleSubmit} className="uploadBtn">Update</button>
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

export default Edit