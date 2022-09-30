import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import {AuthContext, FirebaseContext} from '../../Store/Context'
import {useNavigate} from 'react-router-dom'
import { PostContext } from '../../Store/PostContext';

function Posts() 
{
  const {firebase}=useContext(FirebaseContext)
  const {setPostDetails}=useContext(PostContext)
  const [products, setProducts] = useState([])
  const navigate=useNavigate()
  const {user} = useContext(AuthContext)

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

    <div className="postParentDiv">
      <div className="banner">
          {/* <img src="../../../Images/banner copy.png" alt=""/> */}
          <div className='sell_car'>
            <button>Sell Car</button>
          </div>
          <div>
            <img src="../../../Images/New Banner.png" alt=""/>
          </div>
      </div>
      {user ? "" :
      <div className="moreView">
        <div className="post_search">
          <span>Based on your last search</span>
          <span1>View more</span1>
        </div>
        <div className="cards1">
        {
          products.map(product=>
          {
            return(
              <div onClick={()=>
                {
                  setPostDetails(product)
                  navigate('/view-ad')
                }} className="card1">
            <div className='card_heading'>
              <p>FEATURED</p>
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>

              {/* <div className="favorite">
                <Heart></Heart>
              </div>  */}
            {/* </div> */}
              {/* <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div> */}
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.type}</span>
              <p className="name">{product.title}</p>
            </div>
            <div className="date">
              <p>{product.state}, {product.city}</p>
              {/* <p1>{product.city}</p1> */}
            </div>
            <p>{product.createdAt}</p>
          </div>
              )
          })
        }
        </div>
      </div>
      }

      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards2">
        {
          products.map(product=>
          {
            return(
              <div onClick={()=>
                {
                  setPostDetails(product)
                  // navigate('/view')
                  navigate('/view-ad')
                }} 
                 className="card2">
                

            <div className='card_heading'>
              <p>FEATURED</p>
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>


            {/* <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div> */}
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.type}</span>
              <p className="name">{product.title}</p>
            </div>
            <div className="date">
              <p>{product.state}, {product.city}</p>
              {/* <p1>{product.city}</p1> */}
            </div>
            <p>{product.createdAt}</p>
          </div>
              )
          })
        }
        </div>
        <div className='load_more'>
          <button>Load more</button>
        </div>
        <div className='bottom_banner'>
    
            <div class="" className='bottom_left'> 
              <img width="460" height="200" src="../../Images/phone-app.png" alt=""/>
            </div>

            <div class="" className='bottom_middle'>
              <p1>TRY THE OLX APP</p1>
              <div className='sell_banner'>
                <p>Buy, sell and find just about anything using</p>
              </div>
              <p>the app on your mobile.</p>
            </div>

            <div class="" className='bottom_right'>
              <div>
                <div class="row" className='get_app'>
                  <h6>GET YOUR APP TODAY</h6>
                </div>
                <div className='large_icons'>
                  <a href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792">
                    <img width="135" height="41" src="../../Images/apple-store.png" alt=""/>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                    <img width="135" height="41" src="../../Images/play-store1.png" alt=""/>
                  </a>
                </div>  
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Posts;
