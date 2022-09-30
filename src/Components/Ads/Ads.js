import { Download, Favorite, MoreHoriz, Search, Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useContext, useState } from 'react'
import './Ads.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

function Ads() 
{
  const {firebase}=useContext(FirebaseContext)
  const {setPostDetails}=useContext(PostContext)
  const [products, setProducts] = useState([])
  const navigate=useNavigate()
  const {user} = useContext(AuthContext)
  const {postDetails} = useContext(PostContext)

const getProducts=()=>
 {
  firebase.firestore().collection('products').where('userId','==',user.uid).get().then((snapshot)=>
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
};

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
    <div className='ads_container'>
      <div className='ads_headers'>
        <button onClick={getProducts} >ADS</button>
        <button>FAVOURITES</button>
      </div>

      <div className='download'>
      {/* <div className='download_button'> */}
        <Download/>
        <p>Download leads</p>
        {/* <button>Download leads</button> */}
      </div>

      <div className='search_myads_div'>
        {/* <div className='myads_search'> */}
          <div className='myads_search1'>  
            <Search/>
            <input type="text" placeholder='Search by Ad Title'/>
          </div>
        <p>Filter By:</p>
        <div className='search_view'>
          <button>View all (0)</button>
        </div>
        <div className='search_view_buttons'>
          <button>Active Ads (0)</button>
          <button>Inactive Ads (0)</button>
          <button>Pending Ads (0)</button>
          <button>Moderated Ads (0)</button>
        </div>
      </div>

      <div className='package'>
        <h6>Heavy discount on Business Packages</h6>
        <button>View packages</button>
      </div>
      {
          products.map(product=>
          {
            return(
      <div className='ad'>
            <div className='ad_date_from'>
              <p1>FROM:</p1>
              <p>{product.createdAt}</p>
            </div>
            <div className='ad_detail'>

                <div className='ad_details' onClick={()=>
                                      {
                                        setPostDetails(product)
                                        navigate('/view')
                                      }}>
                    <img src={product.url} alt="" />
                    <div className='ad_desc'>
                      <p>{product.title}</p>
                      <p1>{product.type}</p1>
                    </div>
                    <p>Rs. {product.price}</p>
                    <button1>POSTED</button1>
                    {/* <button2>REJECTED</button2> */}
                    {/* <p1>Wait 12 days to post fro free or pay to post now</p1> */}
                    {/* <p2>This ad was not published. Edit it and go live.</p2> */}
                    <p2>This ad is published. Edit it if you needed.</p2>
                    <Popup contentStyle={{ width: '15%',
                                      height: '22%',
                                      marginTop: '-1rem'                                
                                    }} 
                        className='my-popup-content' trigger={
                    <IconButton>
                        <MoreHoriz/>
                    </IconButton>} 
                    position="bottom right">
                      <div className='ad_settings'>
                        <p onClick={()=>
                                        {
                                          setPostDetails(product)
                                          navigate('/edit')
                                        }}>Edit</p>
                        <p onClick={handleDelete}>Remove</p>
                        <div className='download_lead'>
                          <p>Downoad Leads</p>
                        </div>
                      </div>
                    </Popup>
                </div>


                <div className='ad_views'>
                    <div className='visibility'>
                      <IconButton>
                        <Visibility/>
                      </IconButton>
                      <p>Views: -</p>
                    </div>
                    <div className='favorite'>
                      <IconButton>
                        <Favorite/>
                      </IconButton>
                      <p1>Likes: -</p1>
                    </div>
                    <div className='post_now'>
                      {/* <button>Post now</button> */}
                      <div  className='edit_now'>
                        <button  onClick={()=>
                                        {
                                          setPostDetails(product)
                                          navigate('/edit')
                                        }}>Edit now</button>
                      </div>
                    </div>
                </div>
            </div>
      </div>
      )
          })
        }
    </div>
  )
}

export default Ads