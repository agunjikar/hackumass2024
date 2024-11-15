import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Notyf } from 'notyf';
import { API_URL } from '../constants';

export default function Wishlist() {
  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    }
  });


  // const [wishlistItems, setWishlistItems] = useState([
  //   {
  //     imagePath: "/images/yeezy.png",
  //     name: "yeezy foam runner",
  //     price: "$345",
  //     description: "good condition. almost new. worn maybe 3-4 times.",
  //     tags: ["size 12", "comfy"]
  //   },
  //   {
  //     imagePath: "/images/yeezy.png",
  //     name: "yeezy foam runner",
  //     price: "$345",
  //     description: "good condition. almost new. worn maybe 3-4 times.",
  //     tags: ["size 12", "comfy"]
  //   },
  //   {
  //     imagePath: "/images/yeezy.png",
  //     name: "yeezy foam runner",
  //     price: "$345",
  //     description: "good condition. almost new. worn maybe 3-4 times.",
  //     tags: ["size 12", "comfy"]
  //   },
  //   {
  //     imagePath: "/images/yeezy.png",
  //     name: "yeezy foam runner",
  //     price: "$345",
  //     description: "good condition. almost new. worn maybe 3-4 times.",
  //     tags: ["size 12", "comfy"]
  //   },
  //   // Add more items as needed or fetch dynamically later
  // ]);

const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = () => {
    const url = `${API_URL}/wishlist?accessToken=${localStorage.getItem('token')}`;

    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setWishlistItems(response.data);
      })
      .catch((error) => {
        notyf.error('Something went wrong');
      });
  };

  return (
    <div className="container" style={styles.container}>
      
      <h1 style={styles.heading}>wishlist</h1>

      <div style={styles.headerContainer}> 
        <h1 style={styles.items1}>{wishlistItems.length}</h1>
        <h1 style={styles.items2}>items</h1>
      </div>

      {/* Wishlist items */}
      <div style={styles.grid}>
      {wishlistItems.map((item, index) => (
          <WishlistItem 
            id={item._id}
            key={index}
            imagePath={item.photos[0] ? item.photos[0] : "images/black-jacket.png"} 
            name={item.title} 
            price={item.price} 
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>

      {/* Spacer to prevent overlap with bottom bar */}
      <div style={styles.spacer}></div>

      {/* Bottom navigation bar */}
      <div style={styles.bottomBar}>
                <img src='images/bottom-nav-search.svg' style={styles.bottomIcon} alt='explore' onClick={() => {
                    window.location.href = '/explore';
                }} />
                <img src='images/bottom-nav-heart-active.svg' style={styles.bottomIcon} alt='heart'/>
                <img src='images/bottom-nav-bid.svg' style={styles.bottomIcon} alt='bid' onClick={() => {
                    window.location.href = '/bid';
                }}/>
                <img src='images/bottom-nav-profile.svg' style={styles.bottomIcon} alt='profile' onClick={() => {
                    window.location.href = '/profile';
                }} />
            </div>

    </div>
  );
}


function WishlistItem({ id, imagePath, name, price, description, tags }) {
  return (
    <div style={styles.itemContainer}>
      <div style={styles.imageContainer}>
        <img src={imagePath} alt={name} style={styles.itemImage} />
      </div>
      <div style={styles.buttonsContainer}>
        <button style={styles.view} onClick={() => {
          window.location.href = '/listing?id=' + id;
        }}>view</button>
        <button style={styles.remove}>remove</button>
      </div>
      <div style={styles.productInfo}>
        <h2 style={styles.productName}>{name}</h2>
        <p style={styles.productPrice}>${price}</p>
        <p style={styles.productDescription}>{description}</p>
      </div>
      <div style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <div key={index} style={styles.tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
}



const styles = {
  container: {
    paddingBottom: '7rem',
  },
  heading: {
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 700,
    fontSize: '40px',
    marginLeft: '28px',
    marginBottom: '4px',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginLeft: '28px',
    marginTop: '-10px',
  },
  items1: {
    color: '#73AB84',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '24px',
    marginRight: '1%',
  },
  items2: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '18px',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    width: '90%',
    marginLeft: '20px',
  },
  itemContainer: {
    width: '100%',
    height: 'fit-content',
    borderRadius: '10px',
    backgroundColor: '#343537',
    padding: '6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  itemImage: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  buttonsContainer: {
    marginTop: '10px',
    display: 'flex',
    gap: '6px',
  },
  view: {
    width: '75px',
    height: '28px',
    borderRadius: '10px',
    backgroundColor: '#73AB84',
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '13px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
  },
  remove: {
    width: '75px',
    height: '28px',
    borderRadius: '10px',
    backgroundColor: '#999',
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '13px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
  },
  productInfo: {
    margin: 'auto',
    textAlign: 'center',
  },
  productName: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '13px',
  },
  productPrice: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '12px',
  },
  productDescription: {
    color: '#A9A9A9',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '10px',
  },
  tagsContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
    marginBottom: '10px',
  },
  tag: {
    width: '72px',
    height: '30px',
    borderRadius: '50px',
    backgroundColor: '#EDF2D7',
    color: '#1F4F2E',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '12px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
};