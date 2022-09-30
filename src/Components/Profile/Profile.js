import { ArrowForwardIos, TipsAndUpdatesOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../../Store/Context'
import './Profile.css'

function Profile() 
{
const {user} = useContext(AuthContext)
const {firebase}=useContext(FirebaseContext)
const navigate =useNavigate()
const [name, setName] = useState('')
const [about, setAbout] = useState('')
const [number, setNumber] = useState('')
const [email, setEmail] = useState('')

const handleSubmit=()=>
{
    firebase.firestore().collection('users').where('id','==', user.uid).get().then(function(querySnapshot){
        querySnapshot.forEach(function(document){
        document.ref.update({
        username: name,
        about: about,
        phone: number,
        email: email,
    })
    })
    })
    alert("Details updated")
    navigate('/')  
}

return (
    <div className='page_body'>
            <div className='main_left'>
                <div className='edit_profile'>
                    <p>Edit profile</p>
                    {/* <p>Profile picture</p> */}
                </div>
                <button onClick={()=>navigate('/my-profile')}>View profile</button>
            </div>
            <div className='main_right'>
                <div className='edit'>
                <h5>Edit profile</h5>            
                </div>
                <h6>Basic information</h6>
                <div className='top'>
                    <div className='basic_input'>
                        <input  placeholder={ user ? user.displayName : ""} 
                                value={name}
                                type="text"
                                id="name"
                                onChange={(e)=>setName(e.target.value)}
                                name="name"/>
                        <br />
                        <div className='about_me'>
                            <input type="text" placeholder='About me (optional)'
                            	id="about"
                                value={about}
                                onChange={(e)=>setAbout(e.target.value)}
                                name="about"/>
                        </div>
                    </div>
                    <div className='important'>
                        <div className='tips'>
                            <IconButton>
                                <TipsAndUpdatesOutlined/>
                            </IconButton>
                            <p>Why is it important?</p>
                        </div>
                        <p>OLX is built on trust. Help other people get to <br />
                        know you. Tell them about the things you like. <br />
                        Share your favorite brands, books, movies, <br />
                        shows, music, food. And you will see the <br />
                        results…</p>
                    </div>
                    {/* <hr /> */}
                </div>
                
                {/* <hr /> */}
                <h6>Contact information</h6>
                <div className='contact'>
                   
                    <div className='contact_input'>
                    <div className="contact_number">
                        <p>+91</p>
                        <input type="text"
                               id="number"
                               value={number}
                               onChange={(e)=>setNumber(e.target.value)}
                               name="number" />
                        <IconButton>
                            <ArrowForwardIos/>
                        </IconButton>
                    </div>
                    {/* <input type="text"/> */}
                    <br />
                    {/* <input value={user ? user.email : ""} type="text" /> */}
                    <div className="contact_email">
                        {/* <input value={user ? user.email : ""} type="text" /> */}
                        <input placeholder={user ? user.email : ""}
                                        type="text"
                                        id="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        name="email" />
                        <IconButton>
                            <ArrowForwardIos/>
                        </IconButton>
                    </div>
                    </div>
                    <div className='contact_desc' >
                        <p>Yay! Your number is verified.</p>
                        <div className='email_desc'>
                        <p>Your email is never shared with external parties nor do we use it to spam you in <br /> any way.</p>
                        </div>
                    </div>
                </div> 
                {/* <hr /> */}
                    <h6>Additional information</h6>
                    <div className='additional_info'>
                        <div className='google'>
                            <p>Google</p>
                            <p1>Link your Google account to seamlessly use your contact list.</p1>
                        </div>
                        <div className='unlink'>
                            <button>Unlink</button>
                        </div>
                    </div>
               
                {/* <hr /> */}
                <div className='save'>
                    <div className='discard'>
                        <a href="">Discard</a>
                    </div>
                    <button onClick={handleSubmit}>Save changes</button>
                   
                </div>
            
                
            </div>

    </div>
  )
}

export default Profile

