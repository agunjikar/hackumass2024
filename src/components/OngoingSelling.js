import React from 'react'


export default function OngoingSelling() {
  return (
    <div className="container">
        <div style={styles.rowContainer}>
        <h1 style={styles.heading}>bids/listings</h1>
        <h1 style={styles.plusButton}>+</h1> 
        </div>
        <div style={styles.buttonContainer}> {/* Flex container for buttons */}
        <div style={styles.ongoingButton}>
          <span style={styles.ongoingWord}>ongoing</span>
        </div>
        <div style={styles.completedButton}>
          <span style={styles.completedWord}>completed</span>
        </div>
      </div>
      <div style={styles.buttonContainer}>
      <button style={styles.buying}>buying</button>
      <button style={styles.selling}>selling</button>
    </div>

    <div style={styles.listings}>
            <div style={styles.listing}>
                <div style={styles.listingInline}>
                  <img src="https://github.com/sheldor1510.png" style={styles.listingImage} alt='listingImage' />
                  <div style={styles.listingDetails}>
                      <div style={styles.headerComponent}>
                          <p style={styles.listingTitle}>foam runners</p>
                          <img src='images/chevron-up.svg' style={styles.heartIcon} alt='heart' />
                      </div>
                      <p style={styles.listingPrice}>$345</p>
                      <p style={styles.listingDescription}>good condition. almost new. worn maybe 3-4 times...</p>
                      <div style={styles.tags}>
                          <p style={styles.tag}>size: men's 12</p>
                          <p style={styles.tag}>comfy</p>
                      </div>
                  </div>
            </div>
                <div style={styles.bidItems}>
                  <h3 style={styles.bidsHeading}>bids</h3>
                    <div style={styles.bidItem}>
                      <span style={styles.bidAmount}>$250</span>
                      <span style={styles.bidder}>by @anshul</span>
                      <div style={styles.bidActions}>
                          <button style={styles.acceptButton}>✅</button>
                          <button style={styles.rejectButton}>❌</button>
                      </div>
                  </div>

                  <div style={styles.bidItem}>
                      <span style={styles.bidAmount}>$234</span>
                      <span style={styles.bidder}>by @tanush</span>
                      <div style={styles.bidActions}>
                          <button style={styles.acceptButton}>✅</button>
                          <button style={styles.rejectButton}>❌</button>
                      </div>
                  </div>
                </div>
            </div>
            <div style={styles.listing}>
              <div style={styles.listingInline}>
                  <img src="https://github.com/sheldor1510.png" style={styles.listingImage} alt='listingImage' />
                  <div style={styles.listingDetails}>
                      <div style={styles.headerComponent}>
                          <p style={styles.listingTitle}>yeezy foam runners</p>
                          <img src='images/chevron-down.svg' style={styles.heartIcon} alt='heart' />
                      </div>
                      <p style={styles.listingPrice}>$345</p>
                      <p style={styles.listingDescription}>good condition. almost new. worn maybe 3-4 times...</p>
                      <div style={styles.tags}>
                          <p style={styles.tag}>size: men's 12</p>
                          <p style={styles.tag}>comfy</p>
                      </div>
                  </div>
                </div>
            </div>
            
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
    'bidsHeading': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '20px',
        textAlign: 'left',
    },

    'bidItems': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'left',
      marginBottom: '5px',
      marginTop: '-50px',
      marginLeft: '20px',
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
        marginRight: '20px', // Adjust spacing between button and text
        marginLeft: '60px',
        marginBottom:'15px'
    },


   'rowContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

   'ongoingButton': {
    borderRadius: '10px',
    background: '#73AB84',
    width: '150px',       // Sets the width as per your screenshot
    height: '50px',       // Sets the height as per your screenshot
    padding: '10px',      // Adds padding to match the layout
    flexShrink: 0,        // Prevents the button from shrinking
    display: 'flex',      // Aligns any content within the button
    alignItems: 'center', // Centers content vertically
    justifyContent: 'center', // Centers content horizontally
    marginLeft: '40px',
  },

    'completedButton': {
    borderRadius: '10px',
    background: '#343537',
    width: '150px',       // Sets the width as per your screenshot
    height: '50px',       // Sets the height as per your screenshot
    padding: '10px',      // Adds padding to match the layout
    flexShrink: 0,        // Prevents the button from shrinking
    display: 'flex',      // Aligns any content within the button
    alignItems: 'center', // Centers content vertically
    justifyContent: 'center', // Centers content horizontally
    marginLeft: '20px',

  },

  'ongoingWord':{
    color: '#000',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '22px',
    fontWeight:600,
    fontHeight: 700,
    lineHeight: 'normal',
    borderRadius: '10px',
},

 'completedWord':{
    color: 'white',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '22px',
    fontStyle: 'normal',
    fontHeight: 700,
    fontWeight: 600,
    lineHeight: 'normal',
    borderRadius: '10px',
},

'buttonContainer': {
    display: 'flex',      // Aligns buttons horizontally
    alignItems: 'center',
    marginTop: '1px' , 
    marginBottom:'10px',   // Adds spacing above the buttons
    width: '100%',        // Sets the width to 100% of the container
  },

  'buying': {
    width: '140px',
    height: '55px',
    backgroundColor: '#343537',
    borderRadius: '50px',
    border: 'none',
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans', // Update to your font family
    fontSize: '18px',
    fontWeight: '600',
    textAlign: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    marginLeft: '40px',
    marginTop: '20px',
  },

  'selling': {
    width: '140px',
    height: '55px',
    backgroundColor: '#73AB84',
    borderRadius: '50px',
    border: 'none',
    color: 'black',
    fontFamily: 'Plus Jakarta Sans', // Update to your font family
    fontSize: '18px',
    fontWeight: '600',
    textAlign: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    marginLeft: '20px',
    marginTop: '20px'
  },

  'panel':{
    
        width: '359px',
        height: '358px',
        backgroundColor: '#343537',
        borderRadius: '10px',
        flexShrink: 0,
        padding: '10px',  // Adds padding inside the rectangle, adjust as needed
        margin: '20px 232px 284px 23px', // To control its position around other elements (adjustable)
      
  },
  'searchBar': {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25px',
        borderRadius: '50px',
        background: '#343537',
        width: '70%',
        height: '4rem'
    },
    'input': {
        background: 'none',
        border: 'none',
        outline: 'none',
        color: 'white',
        width: '70%',
        height: '100%',
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 400,
        lineHeight: 'normal',
        marginLeft: '20px',
        fontSize: '18px'
    },
    'searchIcon': {
        width: '40px',
        height: '40px',
        marginLeft: '15px'
    },
    'header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },
    'filter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: '10%',
        width: '3.5rem',
        height: '3.5rem',
        marginLeft: '1.2rem'
    },
    'filterIcon': {
        width: '30px',
        height: '30px'
    },
    'tabs': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '20px',
        marginLeft: '20px'
    },
    'tab': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#343537',
        borderRadius: '50px',
        width: 'fit-content',
        padding: '0 30px',
        height: '3rem',
        marginLeft: '1.2rem'
    },
    'tabText': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '18px'
    },
    'activeTab': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#73AB84',
        borderRadius: '50px',
        width: 'fit-content',
        padding: '0 30px',
        height: '3rem',
        marginLeft: '10px'
    },
    'activeTabText': {
        color: '#343537',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '18px'
    },
    'listings': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '30px',
    },
    'listing': {
        background: '#343537',
        borderRadius: '20px',
        width: '90%',
        marginBottom: '25px',
        height: 'fit-content',
    },
    listingInline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      background: '#343537',
      borderRadius: '20px',
      width: '90%',
      marginBottom: '25px',
      height: 'fit-content',
    },
    'listingImage': {
        width: '10rem',
        height: '10rem',
        borderRadius: '20px',
        marginLeft: '20px',
    },
    'listingDetails': {
        flexDirection: 'column',
        alignItems: 'top',
        justifyContent: 'top',
        marginLeft: '20px',
        minHeight: '12rem',
        height: 'fit-content',
        marginBottom: '10px',
    },
    'headerComponent': {
        display: 'flex',
        alignItems: 'center',
        width: '10.5rem',
        justifyContent: 'space-between',
    },
    'heartIcon': {
        width: '35px',
        height: '35px',
        marginLeft: '15px',
        marginTop: '10px'
    },
    'listingTitle': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '18px',
        marginBottom: '12px'
    },
    'listingPrice': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '0px',
        marginBottom: '12px'
    },
    'listingDescription': {
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 400,
        fontSize: '13px',
        width: '11rem',
        marginTop: '0px',
        marginBottom: '0px'
    },
    'tags': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '5px',
    },
    'tag': {
        background: '#EDF2D7',
        borderRadius: '50px',
        color: '#1F4F2E',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '12px',
        padding: '5px 10px',
        marginRight: '10px',
    },
    bottomBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#343537',
        width: '100%',
        height: '5rem',
        position: 'fixed',
        bottom: '0px'
    },
    bottomIcon: {
        color: 'white',
    },
    bidItem: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#EDF2D7',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '20px',
      fontFamily: "Plus Jakarta Sans",
      width: '90%',

    },
    bidAmount: {
      color: '#1F4F2E',
      fontSize: '25px',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 700,
      wordWrap: 'break-word',
      marginRight: '10px',
    },
    bidder: {
      color: '#1F4F2E',
      fontSize: '12px',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 700,
      wordWrap: 'break-word',
      marginRight: 'auto',
    },
    bidActions: {
      display: 'flex',
      gap: '10px',
    },
    acceptButton: {
      backgroundColor: '#505152',
      border: 'none',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      color: 'green',
      cursor: 'pointer',
      fontFamily: "Plus Jakarta Sans",
    },
    rejectButton: {
      backgroundColor: '#505152',
      border: 'none',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      color: 'white',
      cursor: 'pointer',
      fontFamily: "Plus Jakarta Sans",
    },

}
