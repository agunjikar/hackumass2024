import React from 'react'

export default function PlaceBid() {
  return (
    <div className="container">
        <button style = {styles.xButton}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="#343537"/>
            <path d="M30.8334 19.1667L19.1667 30.8334M19.1667 19.1667L30.8334 30.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <div style = {styles.headingContainer}>
            <h1 style={styles.heading}>order confirmed</h1>
            <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={styles.icon}
            >
                <path
                d="M10.9791 16.9999L14.9883 21.0091L23.0208 12.9908M12.75 31.1666H21.25C28.3333 31.1666 31.1666 28.3333 31.1666 21.2499V12.7499C31.1666 5.66659 28.3333 2.83325 21.25 2.83325H12.75C5.66665 2.83325 2.83331 5.66659 2.83331 12.7499V21.2499C2.83331 28.3333 5.66665 31.1666 12.75 31.1666Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>

        </div>

        <div style={styles.orderContainer}>
                {/* Image Section */}
            <div style={styles.imageContainer}>
                <img
                src="./images/yeezy.png" // Replace with your image URL
                alt="Yeezy Foam Runner"
                style={styles.image}
                />
            </div>


            {/* Description Section */}
            <div style={styles.descriptionContainer}>
                <h2 style={styles.title}>yeezy foam runner</h2>
                <h2 style={styles.price}>$234</h2>
                <h2 style={styles.statusMessage}>
                your order has been accepted and we will be in contact with you
                </h2>
                <div style={styles.statusBadge}>status: processing</div>
            </div>
        </div>
        
        
        <button style={styles.button}>view order details</button>

        

    </div>
  )
}

const styles = {
    'xButton': {
        position: 'absolute',
        top: '20px', // Space from the top edge
        right: '20px', // Space from the right edge
        width: '50px',
        height: '50px',
        padding: '0',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'center',
    },
    'svg': {
        display: 'block',
    },


    'headingContainer': {
        display: 'flex',
        alignItems: 'center', // Aligns the SVG and text based on text baseline
        justifyContent: 'center', // Centers the heading and icon horizontally
        gap: '10px', // Space between the heading and icon
        marginTop: '25vh',
      },
      'heading': {
        fontSize: '32px',
        fontWeight: '700',
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: '1', // Reduces extra vertical space around the text
        margin: '0', // Removes default margin
      },
      'icon': {
        width: '34px',
        height: '34px',
        flexShrink: '0',
        // verticalAlign: 'middle', // Aligns the SVG vertically with the text
      },

    'orderContainer': {
        display: 'flex',
        width: '85vw',
        height: '20vh',
        marginTop: '5vh',
        marginLeft: '5vw',
        borderRadius: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#343537',
        position: 'relative',
    },

    'imageContainer': {
        flex: '0 0 50%',
        height: '100%',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

    'image': {
        width: '90%',
        height: '90%',
        marginTop: '5%',
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'relative',
        borderRadius: '10px',
        objectFit: 'cover',
    },

    
    'descriptionContainer': {
        flex: '1',
        // marginTop: '1%',
        // padding: '10px',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    'title': {
        fontSize: '16px',
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        // flexShrink: 0,
        marginBottom: '1px',
    },

    'price': {
        fontSize: '20px',
        marginBottom: '2px',
        fontWeight: 700,
        fontFamily: 'Plus Jakarta Sans'
    },

    'statusMessage': {
        fontSize: '12px',
        fontWeight: 500,
        color: '#BFBFBF',
        marginLeft: '1vw',
        // marginBottom: '2px',
        fontFamily: 'Plus Jakarta Sans'
    },

    'statusBadge': {
        width: '80%',
        padding: '8px 10px',
        backgroundColor: '#EDF2D7',
        marginTop: '5px',
        marginBottom: '15px',
        color: '#000000',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'center',
        justifyContent: 'center',
        // alignSelf: 'flex-start',
        fontFamily: 'Plus Jakarta Sans'
    },

    'button': {
        height: '8vh',
        width: '70vw',
        marginLeft: '15%',
        marginTop: '20%',
        marginBottom: '20%',
        padding: '15px 30px',
        fontSize: '22px',
        fontWeight: 600,
        textAlign: 'center',
        fontStyle: 'normal',
        lineHeight: 'normal',
        backgroundColor: '#73AB84',
        border: 'none',
        borderRadius: '30px',
        fontFamily: 'Plus Jakarta Sans',
      },
}