import React from 'react'

export default function CompletedSelling() {
  return (
    <div className="container">
        <div style={styles.rowContainer}>
        <h1 style={styles.heading}>bids/listings</h1>
        <h1 style={styles.plusButton}>+</h1> 
        </div>
        <div style={styles.buttonContainer}> {/* Flex container for buttons */}
        <div style={styles.ongoingButton}>
          <span style={styles.ongoingWord}>Ongoing</span>
        </div>
        <div style={styles.completedButton}>
          <span style={styles.completedWord}>Completed</span>
        </div>
      </div>
      <div style={styles.buttonContainer}>
      <button style={styles.buying}>buying</button>
      <button style={styles.selling}>selling</button>
    </div>
    </div>
  )
}

const styles = {
    'heading': {
        marginLeft: '40px',
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '40px',
    },

    'plusButton':{
        borderRadius: '50%',
        background: '#505152',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Color for the "+" text
        marginRight: '40px', // Adjust spacing between button and text
        marginLeft: '50px',
        marginBottom:'15px'
    },

    'rowContainer': {
    display: 'flex',
    alignItems: 'center'
  },

  'ongoingButton': {
    borderRadius: '10px',
    background: '#343537',
    width: '160px',       // Sets the width as per your screenshot
    height: '50px',       // Sets the height as per your screenshot
    padding: '10px',      // Adds padding to match the layout
    flexShrink: 0,        // Prevents the button from shrinking
    display: 'flex',      // Aligns any content within the button
    alignItems: 'center', // Centers content vertically
    justifyContent: 'center', // Centers content horizontally
    marginLeft: '20px',
  },

    'completedButton': {
    borderRadius: '10px',
    background: '#73AB84',
    width: '160px',       // Sets the width as per your screenshot
    height: '50px',       // Sets the height as per your screenshot
    padding: '10px',      // Adds padding to match the layout
    flexShrink: 0,        // Prevents the button from shrinking
    display: 'flex',      // Aligns any content within the button
    alignItems: 'center', // Centers content vertically
    justifyContent: 'center', // Centers content horizontally
    marginLeft: '35px',
  },

  'ongoingWord':{
    color: 'white',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '18px',
    fontWeight:600,
    fontHeight: 700,
    lineHeight: 'normal',
},

 'completedWord':{
    color: 'black',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '18px',
    fontStyle: 'normal',
    fontHeight: 700,
    fontWeight: 600,
    lineHeight: 'normal',
},

'buttonContainer': {
    display: 'flex',      // Aligns buttons horizontally
    alignItems: 'center',
    marginTop: '20px'     // Adds spacing above the buttons
  },

  'buying': {
    width: '100px',
    height: '40px',
    backgroundColor: '#343537',
    borderRadius: '50px',
    border: 'none',
    color: 'white',
    fontFamily: 'Plus Jakarta Sans', // Update to your font family
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    paddingTop: '3px',
    marginLeft: '20px',
    marginTop: '20px'
  },

  'selling': {
    width: '100px',
    height: '40px',
    backgroundColor:'#73AB84' ,
    borderRadius: '50px',
    border: 'none',
    color: 'black',
    fontFamily: 'Plus Jakarta Sans', // Update to your font family
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    paddingTop: '3px',
    marginLeft: '20px',
    marginTop: '20px'
  },

}