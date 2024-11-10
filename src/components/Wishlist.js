import React from 'react';

export default function Wishlist() {
  return (
    <div className="container" style={styles.container}>
      
      <h1 style={styles.heading}>wishlist</h1>

      <div style={styles.headerContainer}> 
        <h1 style={styles.items1}>4</h1>
        <h1 style={styles.items2}>items</h1>
      </div>

      {/* Wishlist items */}
      <div style={styles.grid}>
        {/* Example items */}

        <WishlistItem 
          imagePath="/images/yeezy.png" 
          name="yeezy foam runner" 
          price="$345" 
          description="good condition. almost new. worn maybe 3-4 times."
          tags={["size 12", "comfy"]}
        />
        
        <WishlistItem 
          imagePath="/images/yeezy.png" 
          name="yeezy foam runner" 
          price="$345" 
          description="good condition. almost new. worn maybe 3-4 times."
          tags={["size 12", "comfy"]}
        />
        <WishlistItem 
          imagePath="/images/yeezy.png" 
          name="yeezy foam runner" 
          price="$345" 
          description="good condition. almost new. worn maybe 3-4 times."
          tags={["size 12", "comfy"]}
        />
        <WishlistItem 
          imagePath="/images/yeezy.png" 
          name="yeezy foam runner" 
          price="$345" 
          description="good condition. almost new. worn maybe 3-4 times."
          tags={["size 12", "comfy"]}
        />
      </div>

    </div>
  );
}

// Wishlist Item Component
function WishlistItem({ imagePath, name, price, description, tags }) {
  return (
    <div style={styles.itemContainer}>
      {/* Image container */}
      <div style={styles.imageContainer}>
        <img src={imagePath} alt={name} style={styles.itemImage} />
      </div>

      {/* Buttons */}
      <div style={styles.buttonsContainer}>
        <button style={styles.view}>view</button>
        <button style={styles.remove}>remove</button>
      </div>

      {/* Product info */}
      <div style={styles.productInfo}>
        <h2 style={styles.productName}>{name}</h2>
        <p style={styles.productPrice}>{price}</p>
        <p style={styles.productDescription}>{description}</p>
      </div>

      {/* Tags */}
      <div style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <div key={index} style={styles.tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
}




const styles = {
  heading: {
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 700,
    fontSize: '40px',
    marginLeft: '28px',
    marginBottom: '4px',
    flexShrink: 0
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginLeft: '28px',
    marginTop: '-10px'
  },
  items1: {
    color: '#73AB84',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '24px',
    marginRight: '1%',
    flexShrink: 0
  },
  items2: {
    color: 'var(--Backgrounds-Primary, #FFF)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two items per row
    gap: '20px',
    width: '90%',
    marginLeft: '20px',
    boxSizing: 'border-box'
  },
  itemContainer: {
    width: '100%', // Takes up 70% of the grid cell width
    height: '350px', // Set height to around 250px
    borderRadius: '10px',
    backgroundColor: '#343537',
    padding: '6px', // Reduced padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box' // Ensures padding does not cause overflow
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0'
  },
  itemImage: {
    width: '150px', // Scaled down width for the image
    height: '150px', // Scaled down height for the image
    borderRadius: '10px',
    backgroundColor: '#A9A9A9', // Placeholder color if image fails to load
    objectFit: 'cover' // Ensures the image fits within the box without distortion
  },
  buttonsContainer: {
    marginTop: '10px',
    display: 'flex',
    gap: '6px', // Reduced gap between buttons
  },
  view: {
    width: '75px', // Scaled down width for buttons
    height: '28px', // Scaled down height for buttons
    borderRadius: '10px',
    backgroundColor: '#73AB84',
    color: '#000000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '13px', // Scaled down font size
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer'
  },
  remove: {
    width: '75px', // Scaled down width for buttons
    height: '28px', // Scaled down height for buttons
    borderRadius: '10px',
    backgroundColor: '#999',
    color: '#000000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '13px', // Scaled down font size
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer'
  },
  productInfo: {
    marginLeft: '7%'

  },
  productName: {
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '13px',
    marginBottom: '5px'
  },
  productPrice: {
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '12px', // Scaled down font size to keep consistent with productName
    marginBottom: '5px'
  },
  productDescription: {
    color: '#A9A9A9',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '10px', // Further reduced font size
    marginBottom: '5px'
  },
  tagsContainer: {
    display: 'flex',
    gap: '10px' // Reduced gap between tags
  },
  tag: {
    width: '72px',
    height: '30px', // Reduced height for tags
    borderRadius: '50px',
    backgroundColor: '#EDF2D7',
    color: '#1F4F2E',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '12px', // Further reduced font size for tags
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
  }
};
