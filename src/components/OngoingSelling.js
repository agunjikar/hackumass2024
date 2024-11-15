import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';
import axios from 'axios';
import { Notyf } from 'notyf';
import { useSearchParams } from 'react-router-dom';

export default function OngoingSelling() {
  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    }
  });
      

  const [activeTopButton, setActiveTopButton] = useState('ongoing');
  const [activeBottomButton, setActiveBottomButton] = useState('buying');
  const [showBids, setShowBids] = useState(true);
  const [isChevronUp, setIsChevronUp] = useState(true);

  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/${activeTopButton}/${activeBottomButton}?accessToken=${localStorage.getItem('token')}`)
    .then((response) => {
      setListings(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      notyf.error('Something went wrong');
    });
  }, [activeTopButton, activeBottomButton]);

  const acceptBid = (listingId, buyer_id) => {
    axios.post(`${API_URL}/listing/approvebid`, {
      listing_id: listingId,
      buyer_id: buyer_id,
    })
    .then((response) => {
      notyf.success('Bid accepted successfully');
      window.location.reload();
    })
    .catch((error) => {
      notyf.error('Something went wrong');
    });
  }

  const rejectBid = (listingId, buyer_id) => {
    axios.post(`${API_URL}/listing/rejectbid`, {
      listing_id: listingId,
      buyer_id: buyer_id,
    })
    .then((response) => {
      notyf.success('Bid rejected successfully');
      window.location.reload();
    })
    .catch((error) => {
      notyf.error('Something went wrong');
    });
  }
      

  const handleTopButtonClick = (buttonName) => {
    setActiveTopButton(buttonName);
  };

  const handleBottomButtonClick = (buttonName) => {
    setActiveBottomButton(buttonName);
  };

  const handleListingClick = () => {
    setShowBids((prevState) => !prevState);
    setIsChevronUp((prevState) => !prevState);
  };  

  const getButtonStyle = (buttonName, isActive) => {
    return isActive
      ? { backgroundColor: '#73AB84', color: 'black' }
      : { backgroundColor: '#343537', color: 'white' };
  };

  return (
    <div className="container">
      {/* Header */}
      <div style={styles.rowContainer}>
        <h1 style={styles.heading}>bids/listings</h1>
        <h1 style={styles.plusButton} onClick={() => {
          window.location.href = '/new-listing';
        }}>+</h1>
      </div>

      {/* Top Buttons: Ongoing and Completed */}
      <div style={styles.buttonContainer}>
        <div
          style={{ ...styles.ongoingButton, ...getButtonStyle('ongoing', activeTopButton === 'ongoing') }}
          onClick={() => handleTopButtonClick('ongoing')}
        >
          <span style={styles.buttonText}>ongoing</span>
        </div>
        <div
          style={{ ...styles.completedButton, ...getButtonStyle('completed', activeTopButton === 'completed') }}
          onClick={() => handleTopButtonClick('completed')}
        >
          <span style={styles.buttonText}>completed</span>
        </div>
      </div>

      {/* Bottom Buttons: Buying and Selling */}
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.buying, ...getButtonStyle('buying', activeBottomButton === 'buying') }}
          onClick={() => handleBottomButtonClick('buying')}
        >
          buying
        </button>
        <button
          style={{ ...styles.selling, ...getButtonStyle('selling', activeBottomButton === 'selling') }}
          onClick={() => handleBottomButtonClick('selling')}
        >
          selling
        </button>
      </div>

      {
        listings && listings.map((listing) => {
          return (
            <div style={styles.listing} onClick={handleListingClick}>
  <div style={styles.listingInline}>
    <img src={listing.photos[0] ? listing.photos[0] : "images/black-jacket.png"} style={styles.listingImage} alt="listingImage" />
    <div style={styles.listingDetails}>
      <div style={styles.headerComponent}>
        <p style={styles.listingTitle}>{listing.title}</p>
        <img
          src={isChevronUp ? 'images/chevron-down.svg' : 'images/chevron-up.svg'}
          style={styles.heartIcon}
          alt="chevron-icon"
        />
      </div>
      <p style={styles.listingPrice}>${listing.price}</p>
      <p style={styles.listingDescription}>{listing.description}</p>
      {/* <div style={styles.tags}>
          {   
              listing.tags.map((tag, index) => {
                  return (
                      <p style={styles.tag} key={index}>{tag}</p>
                  );
              })
          }
      </div>
      <div style={styles.tags}>
          <p style={styles.tag}>{listing.size}</p>
          <p style={styles.tag}>{listing.condition}</p>
      </div> */}

    <div style={styles.tags}>
    <p style={styles.tag}>{listing.current_bids.length} bids</p>
    <p style={styles.tag}>{listing.status}</p>
    </div>
    </div>
  </div>

  {showBids && listing.current_bids.length > 0 && listing.status != 'sold' && (
  <div style={styles.bidItems}>
    <h3 style={styles.bidsHeading}>{listing.current_bids.length} bids</h3>
    
    {/* First Bid */}
    {
      listing.current_bids.map((bid, index) => {
        return (
          <div style={styles.bidItem} key={index}>
            <span style={styles.bidAmount}>${bid.bid_price}</span>
            <span style={styles.bidder}>by @{bid.username}</span>
            <div style={styles.bidActions}>
              <button style={styles.acceptButton} onClick={() => {
                acceptBid(listing._id, bid.user);
              }}>✅</button>
              <button style={styles.rejectButton} onClick={() => {
                rejectBid(listing._id, bid.user);
              }}>❌</button>
            </div>
          </div>
        );
      })
    }
  </div>
)}

</div>
          )
        })
      }


      {/* Spacer to prevent overlap with bottom bar */}
      <div style={styles.spacer}></div>
      <div style={styles.bottomBar}>
        <img src='images/bottom-nav-search.svg' style={styles.bottomIcon} alt='explore' onClick={() => {
          window.location.href = '/explore';
        }} />
        <img src='images/bottom-nav-heart.svg' style={styles.bottomIcon} alt='heart' onClick={() => {
          window.location.href = '/wishlist';
        }}/>
        <img src='images/bottom-nav-bid-active.svg' style={styles.bottomIcon} alt='bid' />
        <img src='images/bottom-nav-profile.svg' style={styles.bottomIcon} alt='profile' onClick={() => {
          window.location.href = '/profile';
        }}/>
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
    rowContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '20px',
      width: '100%',
    },
    ongoingButton: {
      borderRadius: '10px',
      width: '150px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '40px',
    },
    completedButton: {
      borderRadius: '10px',
      width: '150px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '20px',
    },
    buying: {
      width: '140px',
      height: '55px',
      borderRadius: '50px',
      border: 'none',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '18px',
      fontWeight: '600',
      textAlign: 'center',
      cursor: 'pointer',
      marginLeft: '40px',
    },
    selling: {
      width: '140px',
      height: '55px',
      borderRadius: '50px',
      border: 'none',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '18px',
      fontWeight: '600',
      textAlign: 'center',
      cursor: 'pointer',
      marginLeft: '20px',
    },
    buttonText: {
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '22px',
      fontWeight: '600',
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
      marginLeft: '20px',
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
        marginBottom: '5px'
    },
    'tags': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '0px',
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
    spacer: {
      height: '7rem',
    },
    bottomBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: '#343537',
      width: '100%',
      height: '5rem',
      position: 'fixed',
      bottom: '0px',
      zIndex: 10,
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
