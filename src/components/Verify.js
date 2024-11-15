import React, { useState } from 'react'
import { API_URL } from '../constants';
import axios from 'axios';
import { Notyf } from 'notyf';

export default function Verify() {
  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: 'right',
      y: 'top',
    }
  });

  const [verificationCode, setVerificationCode] = useState('')

  const handleVerify = () => {
    if (!verificationCode) {
      notyf.error('Please fill all the fields');
      return;
    }

    axios.post(`${API_URL}/verify`, {
      accessToken: localStorage.getItem('token'),
      token: verificationCode,
    })
    .then((response) => {
      if (response.data.success == true) {
        notyf.success('User verified successfully');
        window.location.href = '/login';
      } else {
        notyf.error('Invalid verification code');
      }
    })
    .catch((error) => {
      notyf.error('Something went wrong');
    });
  }

  return (
    <div className="container">
        <h1 style={styles.heading1}>verify</h1>
        <label style={styles.label}>verification code</label>
        <input
          style={styles.input}
          type="text"
          placeholder="123456"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        
        <button style={styles.button1} onClick={handleVerify}>verify</button>
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
    marginTop: '520px'
  }
}
