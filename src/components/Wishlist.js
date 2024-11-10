import React from 'react'

export default function Wishlist() {
  return (
    <div className="container">
        <h1 style={styles.heading1}>wishlist</h1>
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
      marginTop: '5%',
      marginLeft: '39px',
      marginBottom: '100px'
  },
}
