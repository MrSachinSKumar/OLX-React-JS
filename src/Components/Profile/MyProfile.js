import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Store/Context'
import './MyProfile.css'

function MyProfile() 
{
  const {user} = useContext(AuthContext)
  const navigate=useNavigate()

  return (
    <div className='User_Details'>
        <div className='MyProfile_User_Details'>
            <h1>{ user ? user.displayName : ""}</h1>
            <button onClick={()=>navigate(`/profile/${user.uid}`)}>Edit profile</button>
        </div>
        <div className='MyProfile_Main'>
        <div className='MyProfile_Left'>
            {/* <div className='MyProfile_Avatar'>
                <IconButton>
                    <Avatar/>
                </IconButton>
            </div> */}
            <div className='MyProfile_Friends'>
                <div className='MyProfile_Friends_Heading'>
                    <p>FRIENDS</p>
                </div>
                <div className='MyProfile_Followers_Main'>
                    <div className='MyProfile_Followers'>
                        <p>Followers</p>
                        <p1>0</p1>
                    </div>
                    <div className='MyProfile_Followers'>
                        <p>Following</p>
                        <p1>0</p1>
                    </div>
                </div>
            </div>
            <div className='MyProfile_Linked'>
                <div className='MyProfile_Linked_Heading'>
                    <p>Linked accounts</p>
                </div>
                <div className='MyProfile_Linked_Accounts'>
                    <div className='MyProfile_Followers'>
                        <p>FACEBOOK</p>
                        <CheckCircleOutlineOutlined/>
                    </div>
                    <div className='MyProfile_Followers'>
                        <p>GOOGLE</p>
                        <CheckCircleOutlineOutlined/>
                    </div>
                    <div className='MyProfile_Followers'>
                        <p>PHONE NUMBER</p>
                        <CheckCircleOutlineOutlined/>
                    </div>
                    <div className='MyProfile_Followers'>
                        <p>EMAIL</p>
                        <CheckCircleOutlineOutlined/>
                    </div>
                </div>
            </div>
            <div className='MyProfile_Member'>
                <p>Member since</p>
            </div>
            <div className='MyProfile_Share'>
                <p>Share Profile Link</p>
            </div>
        </div>
        <div className='MyProfile_Right'>
            <div className='MyProfile_Ad_Details'>
                <p>There are no Ads</p>
                <p1>When users post ads, will appear here. If you want to post something you can do it now</p1>
                <br />
                <button onClick={()=>navigate('/create')}>Start selling</button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default MyProfile