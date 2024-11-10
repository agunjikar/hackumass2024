import React from 'react';

export default function Wishlist() {
  return (
    <div className="container" style={styles.container}>
        <h1 style={styles.heading1}>wishlist</h1>
        
        <div style={styles.card}>
            <div style={styles.cardHeader}>
                <img 
                  src="https://via.placeholder.com/150" // Replace with actual image URL
                  alt="product"
                  style={styles.productImage}
                />
                <div style={styles.productInfo}>
                    <h2 style={styles.productTitle}>yeezy foam runner</h2>
                    <p style={styles.productPrice}>$345</p>
                    <p style={styles.productDescription}>
                        good condition. almost new. worn maybe 3–4 times...
                    </p>
                    <div style={styles.bidInfo}>
                        <span style={styles.bidCount}>2 bids</span>
                        <span style={styles.highestBid}>highest: $250</span>
                    </div>
                </div>
            </div>
            
            <h3 style={styles.bidsHeading}>bids</h3>
            
            <div style={styles.bidItem}>
                <span style={styles.bidAmount}>$250</span>
                <span style={styles.bidder}>by @anshul</span>
                <div style={styles.bidActions}>
                    <button style={styles.acceptButton}>✔️</button>
                    <button style={styles.rejectButton}>❌</button>
                </div>
            </div>

            <div style={styles.bidItem}>
                <span style={styles.bidAmount}>$234</span>
                <span style={styles.bidder}>by @tanush</span>
                <div style={styles.bidActions}>
                    <button style={styles.acceptButton}>✔️</button>
                    <button style={styles.rejectButton}>❌</button>
                </div>
            </div>
        </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    minHeight: '100vh', // Full viewport height
    backgroundColor: '#1f1f1f', // Assuming dark background based on design
    overflow: 'hidden', // Prevents overflow from pushing content outside the viewport
  },
  heading1: {
    display: 'none' // Hide heading if not needed
  },
  card: {
    width: '100%',
    maxWidth: '379px', // Ensures card doesn’t exceed specified width
    backgroundColor: '#343537',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: "Plus Jakarta Sans",
    boxSizing: 'border-box', // Ensures padding doesn't push the card outside maxWidth
  },
  cardHeader: {
    display: 'flex',
    marginBottom: '20px',
  },
  productImage: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    marginRight: '15px',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: '18px',
    fontWeight: 700,
    marginBottom: '-14px',
    marginTop: '2px',
    marginLeft: '5px',
    fontFamily: "Plus Jakarta Sans",
  },
  productPrice: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#FFF',
    marginBottom: '5px',
    marginLeft: '5px',
    fontFamily: "Plus Jakarta Sans",
  },
  productDescription: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.75)',
    marginTop: '-6px',
    marginLeft: '5px',
    fontFamily: "Plus Jakarta Sans",
  },
  bidInfo: {
    display: 'flex',
    gap: '10px',
  },
  bidCount: {
    color: '#1F4F2E',
    fontSize: '12px',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 700,
    wordWrap: 'break-word',
    backgroundColor: '#d0e8d1',
    padding: '5px 10px',
    borderRadius: '50px',
  },
  highestBid: {
    color: '#1F4F2E',
    fontSize: '12px',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 700,
    wordWrap: 'break-word',
    backgroundColor: '#d0e8d1',
    padding: '5px 10px',
    borderRadius: '50px',
  },
  bidsHeading: {
    fontSize: '20px',
    fontWeight: 700,
    marginTop: '10px',
    marginBottom: '10px',
    fontFamily: "Plus Jakarta Sans",
  },
  bidItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#EDF2D7',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px',
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
    backgroundColor: '#5cb85c',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    color: 'white',
    cursor: 'pointer',
    fontFamily: "Plus Jakarta Sans",
  },
  rejectButton: {
    backgroundColor: '#d9534f',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    color: 'white',
    cursor: 'pointer',
    fontFamily: "Plus Jakarta Sans",
  },
};
