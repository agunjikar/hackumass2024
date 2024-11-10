import React from 'react'

export default function Home() {
  return (
    <div className="container">
        <h1 style={styles.heading1}>U-sell</h1>
        <h2 style={styles.heading2}>campus-wide marketplace</h2>
        <button style={styles.button1} onClick={() => {
          window.location.href = '/register';
        }}>register</button>
        <button style={styles.button2} onClick={() => {
          window.location.href = '/login';
        }}>login</button>
    </div>
  )
}

const styles = {
  'heading1': {
      background: 'rgba(43, 43, 43, 0.97)',
      color: 'white',
      textAlign: 'center',
      fontFamily: "Plus Jakarta Sans",
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      marginTop: '80%',
  },
  'heading2': {
    color: 'var(--Backgrounds-Primary, #FFF)',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '25px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    marginTop: '-5%',
  },
  'button1': {
    width: '400px',
    height: '80px',
    background: 'rgba(170, 170, 170, 0)',
    borderRadius: '50px',
    border: '2.5px solid white',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    margin: '16px auto',
    display: 'block', 
    marginTop: '60%',
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 600
  },
  'button2': {
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
    fontWeight: 600
  }
}