import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../constants';

// Import the useSearchParams hook
import { useSearchParams } from 'react-router-dom';

export default function Listing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listing, setListing] = useState({
    title: '',
    price: 0,
    bidPrice: 0,
    description: '',
    tags: [],
    condition: '',
    size: ''
  });

  useEffect(() => {
    axios.get(`${API_URL}/listings/${searchParams.get('id')}`)
      .then((response) => {
        setListing(response.data);
      })
      .catch((error) => {
        console.error('Error fetching listing:', error);
      });
  });

  return (
    <div className="container">
        <div style={styles.headerContainer}>
            <h1 style={styles.heading}>listing</h1>
            <h1 style={styles.heading2}>by @anshulsaha</h1>
            <CloseButton /> {}
        </div>
        <h1 style={styles.listingName}>{listing.title}</h1>
        
        <div style={styles.priceDiv}>
            <h1 style={styles.priceTag}>${listing.price}</h1>
            <HeartButton /> {}
        </div>

        <div style={styles.imageContainer}>
            <img src="/images/MainPic.webp" alt="Bomber Jacket" style={styles.image} />
        </div>

        {/* Thumbnails container */}
      <div style={styles.thumbnailsContainer}>
        <div style={styles.thumbnail}>
          <img src="/images/SidePic1.webp" alt="Thumbnail 1" style={styles.thumbnailImage} />
        </div>
        <div style={styles.thumbnail}>
          <img src="/images/SidePic2.webp" alt="Thumbnail 2" style={styles.thumbnailImage} />
        </div>
        <div style={styles.thumbnail}>
          <img src="/images/SidePic3.webp" alt="Thumbnail 3" style={styles.thumbnailImage} />
        </div>
        <div style={styles.thumbnail}>
          <img src="/images/SidePic4.webp" alt="Thumbnail 4" style={styles.thumbnailImage} />
        </div>
      </div>


    <div style={styles.buttonsContainer}>
        <div style={styles.actionButtonContainer} onClick={() => {
          window.location.href = '/placebid?listing=' + listing._id + '&price=' + listing.price + '&title=' + listing.title;
        }}>
          <ActionButton label="place bid" />
          <p style={styles.priceInfo}>minimum bid : ${listing.bidPrice}</p>
        </div>
        <div style={styles.actionButtonContainer} onClick={() => {
            window.location.href = '/orderconfirmed?price=' + listing.price + '&title=' + listing.title;
          }}>
          <ActionButton label="buy now" />
          <p style={styles.priceInfo}>buy now price: ${listing.price}</p>
        </div>
    </div>

    <div style={styles.descriptionArea}>
        <p>
          {listing.description}
        </p>
      </div>

    {/* Tags area */}
    <div style={styles.tagsContainer}>
        {
          listing.tags.map((tag) => (
            <Tag label={tag} style={styles.tag} />
          ))
        }
        <Tag label={`condition: ${listing.condition}`} style={styles.tagLarge} />
        <Tag label={`size: ${listing.size}`} style={styles.tagLarge} />
    </div>

    </div>
  )
}

// Tag Component
function Tag({ label, style }) {
    return (
      <div style={{ ...styles.tag, ...style }}>
        <span style={styles.tagText}>{label}</span>
      </div>
    );
  }

//X Button
function CloseButton() {
    return (
      <div style={styles.closeButton} onClick={() => {
        window.location.href = '/explore';
      }}>
        <div style={styles.line1}></div>
        <div style={styles.line2}></div>
      </div>
    );
  }


  function HeartButton() {
    return (
      <div style={styles.heartButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.64778 5.94778C4.51041 5.08542 5.68023 4.60096 6.89998 4.60096C8.11974 4.60096 9.28955 5.08542 10.1522 5.94778L11.5 7.29443L12.8478 5.94778C13.2721 5.50844 13.7797 5.158 14.3409 4.91692C14.9021 4.67583 15.5057 4.54894 16.1165 4.54363C16.7273 4.53832 17.333 4.65471 17.8984 4.886C18.4637 5.1173 18.9773 5.45886 19.4092 5.89077C19.8411 6.32267 20.1827 6.83627 20.414 7.40159C20.6453 7.96692 20.7616 8.57264 20.7563 9.18343C20.751 9.79421 20.6241 10.3978 20.383 10.959C20.142 11.5203 19.7915 12.0278 19.3522 12.4522L11.5 20.3055L3.64778 12.4522C2.78541 11.5896 2.30096 10.4197 2.30096 9.19998C2.30096 7.98023 2.78541 6.81041 3.64778 5.94778V5.94778Z"
            stroke="#73AB84"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Action Button
function ActionButton({ label }) {
    return (
      <div style={styles.actionButton}>
        <span style={styles.buttonLabel}>{label}</span>
      </div>
    );
  }
  


const styles = {
    headerContainer: {
      display: 'flex',
      alignItems: 'baseline', // Aligns items vertically center without extra space
      marginLeft: '4%'
    },
    heading: {
      color: '#FFFFFF',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 700,
      marginRight: '1%', // Adjust this value as needed for minimal space
      flexShrink: 0
    },
    heading2: {
      color: '#73AB84',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal'
    },
    closeButton: {
        width: '50px',
        height: '50px',
        marginLeft: '40%',
        borderRadius: '50px',
        display: 'flex',
        position: 'absolute',
        right: 20,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: '#343537',
    },
    line1: {
        position: 'absolute',
        width: '20px',
        height: '2px',
        backgroundColor: '#FFFFFF',
        borderRadius: '1px', // Rounds the ends of the line
        transform: 'rotate(45deg)'
    },
    line2: {
        position: 'absolute',
        width: '20px',
        height: '2px',
        backgroundColor: '#FFFFFF',
        borderRadius: '1px', // Rounds the ends of the line
        transform: 'rotate(-45deg)'
    },
    listingName: {
        color: '#FFFFFF',
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        fontSize: '22px',
        fontWeight: 600,
        lineHeight: 'normal',
        marginLeft: '5%', // Adjust this value as needed for minimal space
        flexShrink: 0,
        marginBottom: '-16px'
    },
    priceTag: {
        color: '#73AB84',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: '#73AB84',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginLeft: '5%',
    },
    imageContainer: {
        width: '385px',
        height: '263px',
        flexShrink: 0,
        borderRadius: '15px', // Rounded corners
        overflow: 'hidden', // Ensures image stays within rounded corners
        margin: '0 auto', // Center horizontally
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' // Ensures the image covers the container without distortion
    },
    priceDiv: {
        display: 'flex',
        alignItems: 'center', // Aligns items vertically center without extra space
    },
    heartButton: {
        width: '50px',
        height: '50px',
        marginLeft: '56%',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: '#343537',
    },
    thumbnailsContainer: {
        display: 'flex',
        gap: '10px', // Spacing between thumbnails
        marginTop: '20px',
        marginLeft: '22px' // Aligns thumbnails with the main image
    },
    thumbnail: {
        width: '71px',
        height: '74px',
        flexShrink: 0,
        borderRadius: '8px', // Adjust as desired
        overflow: 'hidden'
    },
    thumbnailImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(70%)'
    },
    buttonsContainer: {
        display: 'flex',
        gap: '10px',
        marginTop: '25px',
        justifyContent: 'center'
    },
    actionButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px'
    },
    actionButton: {
        width: '171px',
        height: '55px',
        borderRadius: '50px',
        backgroundColor: '#73AB84',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    buttonLabel: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop: '-15px'
    },
    priceInfo: {
        color: '#000',
        fontSize: '10px',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '700',
        marginTop: '-25px'
    },
    descriptionArea: {
        marginTop: '30px',
        marginLeft: '2px',
        fontSize: '16px',
        color: '#FFFFFF',
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: '1.5',
        padding: '0 5%', // Center-align the text with padding
        textAlign: 'left' // Aligns the description text to the left
    },
    tagsContainer: {
        display: 'flex',
        gap: '15px',
        marginTop: '20px',
        marginLeft: '22px',
        justifyContent: 'flex-start',
        flexWrap: 'wrap', // Allows tags to wrap to the next line if needed
        marginBottom: '20%'
      },
      tag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30px',
        borderRadius: '50px',
        backgroundColor: '#EDF2D7',
        fontFamily: 'Plus Jakarta Sans',
        width: 'auto', // Makes the width dynamic
        maxWidth: '100%',
        padding: '4px', 
      },

      tagText: {
        padding: '10px',
        color: '#1F4F2E',
        textAlign: 'center',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 'normal'
      }
  };