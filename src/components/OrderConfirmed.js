import React from 'react'

export default function PlaceBid() {
  return (
    <div className="container">
        <h1 style={styles.heading}>order confirmed</h1>
        
        <div style={styles.orderContainer}>
                {/* Image Section */}
            <img
            src="./images/yeezy.png" // Replace with your image URL
            alt="Yeezy Foam Runner"
            style={styles.image}
            />


            {/* Description Section */}
            <div style={styles.descriptionContainer}>
                <h2 style={styles.title}>yeezy foam runner</h2>
                <p style={styles.price}>$234</p>
                <p style={styles.statusMessage}>
                your order has been accepted and we will be in contact with you
                </p>
                <div style={styles.statusBadge}>status: processing</div>
            </div>
        </div>
        
        
        <button style={styles.button}>view order details</button>

        

    </div>
  )
}

const styles = {
    'heading': {
        fontSize: 32,
        fontWeight: 700,
        marginLeft: '10vw',
        marginTop: '25vh',
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
    },

    'orderContainer': {
        width: '80vw',
        height: '20vh',
        marginTop: '5vh',
        marginLeft: '5vw',
        borderRadius: '10px',
        // flex: '0 0 50%',
        // marginRight: '10px',
    },

    'image': {
        marginLeft: '3vw',
        width: '50%',
        height: '50%',
        borderRadius: '10px',
        objectFit: 'cover',
    },

    'imageContainer': {
        // width: '50vw',
        // height: '50vh',
        // border: 'none'
    },

    'descriptionContainer': {
        flex: '1',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    'title': {
        fontSize: '15px',
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        flexShrink: 0,
        marginBottom: '5px',
    },

    'price': {
        fontSize: '20px',
        marginBottom: '5px',
    },

    'statusMessage': {
        fontSize: '14px',
        color: '#BFBFBF',
        marginBottom: '10px',
    },

    'statusBadge': {
        padding: '5px 10px',
        backgroundColor: '#A5D6A7',
        color: '#000000',
        borderRadius: '20px',
        fontSize: '14px',
        textAlign: 'center',
        alignSelf: 'flex-start',
    },

    'button': {
        height: '8vh',
        width: '70vw',
        marginLeft: '7vw',
        marginTop: '1vh',
        padding: '15px 30px',
        fontSize: '22px',
        textAlign: 'center',
        fontStyle: 'normal',
        lineHeight: 'normal',
        backgroundColor: '#73AB84',
        border: 'none',
        borderRadius: '30px',
        fontFamily: 'Plus Jakarta Sans',
      },
}