import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [number, setNumber] = useState('')

  const handleUser = () => {
    localStorage.setItem('idInstance', idInstance)
    localStorage.setItem('apiTokenInstance', apiTokenInstance)
    localStorage.setItem('number', number)
  }

  return (
    <div className="loginContainer">
      <div className="joinInnerContainer">
      <i className='green-api'>GREEN-API test</i>
      <br/><br/>
        <h1 className="heading">Log In</h1>
        <div>
          <input placeholder="idInstance" className="joinInput" type="text" onChange={(event) => setIdInstance(event.target.value)} />
        </div>
        <div>
          <input placeholder="apiTokenInstance" 
             className="joinInput mt-20" type="text" 
             onChange={(event) => setApiTokenInstance(event.target.value)} 
             />
          <input placeholder="enter number chat" 
             className="joinInput mt-20" type="text" 
             onChange={(event) => setNumber(event.target.value)} 
             />
        </div>
        <Link to={`/chat`}>
          <button className={'button mt-20'} onClick={handleUser}>Sign In</button>
        </Link>
      </div>
    </div>
  );
}
