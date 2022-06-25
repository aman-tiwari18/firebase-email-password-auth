import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom';

function Home(){
  const [user,loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div>
      <h1> Welcome {user?.email}</h1>
      <button onClick = {()=>{auth.signOut(); navigate('/')}}>signOut</button>
    </div>
  )
}

export default Home;