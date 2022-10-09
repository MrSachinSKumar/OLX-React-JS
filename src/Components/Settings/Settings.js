import React, { useContext, useState } from 'react'
import './Settings.css'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { getAuth, deleteUser,updatePassword  } from "firebase/auth";

function Settings() 
{
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const {user} = useContext(AuthContext)
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  
  const deleteAccount=()=>
  {
    confirmAlert({
       title: 'Delete Account',
       message: 'You are about to permanently delete your account. Are you sure about this?',
       buttons: 
       [{
         label: 'DELETE',
         onClick: () =>
         {
            firebase.firestore().collection('users').where('id','==',user.uid).get().then((response)=>
            {
                response.forEach(document=>
                {
                  document.ref.delete()
                })
            })

            firebase.firestore().collection('products').where('userId','==',user.uid).get().then((response)=>
            {
                response.forEach(document=>
                {
                  document.ref.delete()
                })
            })
          
          deleteAuth()
          alert('Account deleted')
          navigate('/login')
        }},
         {label: 'CANCEL'}]
     });
  }
  const deleteAuth=()=>
  {
    const auth = getAuth();
    const authuser = auth.currentUser;

    deleteUser(authuser).then(() => 
    {
    }).catch((error) => 
    {
    });      
  }

  const logout=()=>
  {
    confirmAlert({
       title: 'Logout from everywhere',
       message: "You'll get logged out from all devices and browsers. Do you still want to continue?",
       buttons: 
       [{
         label: 'Logout',
         onClick: () =>{
          firebase.auth().signOut()
          alert('Logged out from all devices')
         navigate('/')
        }},
         {label: 'Cancel'}]
     });
  }

  const changePassword=()=>
  {
    if(password==='' || oldPassword==='')
    {
      alert('All fields are mandatory')
    }else if(password==='' && oldPassword==='')
    {
      alert('All fields are mandatory')
    }
    else if(password===oldPassword)
    {
    confirmAlert({
       title: 'Change password',
       message: "Your password will be changed. Do you still want to continue?",
       buttons: 
       [{
         label: 'Change',
         onClick: () =>
         {
          const auth = getAuth();
          const authuser = auth.currentUser;
          const newPassword = password;
          
          updatePassword(authuser, newPassword).then(() => 
          {
          }).catch((error) => 
          {
            
          });
          alert('Password changed')
          navigate('/login')
        }},
         {label: 'Cancel'}]
     });
    }else
    {
      window.alert('Password mismatching')
    }
  }
  
  return (
    <div className='settings_container'>
      <div className='privacy'>
        <p>Privacy</p>
        <p>Notifications</p>
        <p onClick={logout}>Logout from all devices</p>
        <p onClick={(e)=> {deleteAccount(e)}}>Delete account</p>
        <p>Chat safety tips</p>
      </div>
      <div className='password'>
        <div className='change'>
          <p>Change password</p>
        </div>
        <div className='new_password'>
            {/* <input/>
            <br /> */}
            <input  placeholder='New password'   
                    type="text" 
                    id="oldPassword"
                      // value={oldPassword}
                      onChange={(e)=>setOldPassword(e.target.value)}
                      name="oldPassword"  />
            <p>Use minimum 6 characters, and at least one letter and one number</p>
            <br />
            <input placeholder='Confirm new password'
                    type="text" 
                        id="newPassword"
                          // value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          name="newPassword" />
            <br />
            <button onClick={changePassword}>Change password</button>
          </div>
      </div>
    </div>
  )
}

export default Settings