import React, { useState } from 'react'
import { API_URL } from '../constants';
import axios from 'axios';
import { Notyf } from 'notyf';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: 'right',
      y: 'top',
    }
  });

  const handleLogin = () => {
    if (!username || !password) {
      notyf.error('Please fill all the fields');
      return;
    }

    axios.post(`${API_URL}/login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.success === true) {
        notyf.success('User logged in successfully');
        localStorage.setItem('token', response.data.accessToken);
        window.location.href = '/explore';
      } else {
        notyf.error('Invalid credentials');
      }
    })
    .catch((error) => {
      notyf.error('Something went wrong');
    });
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <div className="container">
        <h1 style={styles.heading1}>login</h1>
        <label style={styles.label}>username</label>
        <input
          style={styles.input}
          type="text"
          placeholder="anshulsaha"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label style={styles.label}>password</label>
        <input
          style={styles.input}
          type="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button style={styles.button1} onClick={handleLogin}>login</button>
    </div>
  )
}

const styles = {
    'heading1': {
      background: 'rgba(43, 43, 43, 0.97)',
      color: 'white',
      fontFamily: "Plus Jakarta Sans",
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      marginTop: '3%',
      marginLeft: '33px',
      marginBottom: '100px'
  },
  label: {
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    marginTop: '40px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: '33px',
  },
  input: {
    width: '346px',
    height: '66px',
    backgroundColor: '#343537',
    borderRadius: '10px',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 400,
    paddingLeft: '20px',
    marginBottom: '20px',
    display: 'block',
    marginLeft: '33px',
    outline : 'none',
  }, 
  'button1': {
    width: '400px',
    height: '80px',
    background: '#73AB84',
    borderRadius: '50px',
    color: 'black',
    fontSize: '24px',
    cursor: 'pointer',
    margin: '26px auto',
    display: 'block',
    border: 'none',
    bottom: '25%',
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 600,
    marginTop: '380px'
  }
}
