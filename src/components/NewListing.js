import React, { useState } from 'react';

export default function NewListing() {
  // States for input fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [size, setSize] = useState('');
  const [bidPrice, setBidPrice] = useState('');
  const [tags, setTags] = useState('');
  const [price, setPrice] = useState('');

  // Function to handle listing item
  const handleListItem = () => {
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Condition:', condition);
    console.log('Size:', size);
    console.log('Bid Price:', bidPrice);
    console.log('Tags:', tags);
    console.log('Price:', price);
  };

  return (
    <div className="container p-6 bg-black text-white max-w-md mx-auto">
      {/* Header with title and close button */}
      <div style={styles.headerContainer}>
        <h1 style={styles.heading}>new listing</h1>
        <div style={styles.closeButton} className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
            <path d="M15.8334 4.16667L4.16669 15.8333M4.1667 4.16667L15.8334 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div style={styles.photoUploadBox} className="flex flex-col items-center justify-center mb-6 relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="370" height="370" fill="none">
          <rect x="1.25" y="1.25" width="368.5" height="368.5" rx="48.75" stroke="#73AB84" strokeWidth="2.5" />
        </svg>
        <div style={styles.innerCircle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" fill="none">
            <path d="M28.5 12.5v33M12.5 28.5h33" stroke="#73AB84" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div style={styles.addPhotosText}>add photos</div>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <div style={styles.label}>category</div>
        <div className="flex gap-2 mb-4">
          <button style={styles.inactiveButton}>Electronics</button>
          <button style={styles.activeButton}>Books</button>
        </div>
        <div className="flex gap-2">
          <button style={styles.inactiveButton}>Clothing</button>
          <button style={styles.activeButton}>Sneakers</button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-6">
        <div>
          <div style={styles.label}>title</div>
          <input
            type="text"
            placeholder="Enter title"
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div style={styles.label}>description</div>
          <input
            type="text"
            placeholder="Enter description"
            style={styles.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div style={styles.label}>condition</div>
          <input
            type="text"
            placeholder="Enter condition"
            style={styles.input}
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>
        <div>
          <div style={styles.label}>size</div>
          <input
            type="text"
            placeholder="Enter size"
            style={styles.input}
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div>
          <div style={styles.label}>bid price</div>
          <input
            type="text"
            placeholder="Enter bid price"
            style={styles.input}
            value={bidPrice}
            onChange={(e) => setBidPrice(e.target.value)}
          />
        </div>
        <div>
          <div style={styles.label}>tags</div>
          <input
            type="text"
            placeholder="Enter tags"
            style={styles.input}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </div>

      {/* Price and Donation Fields */}
      <div className="mb-6">
        <div style={styles.label}>price</div>
        <div style={styles.inputRow} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="$65"
            style={styles.halfInput}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button style={styles.donationButton}>It's a donation</button>
        </div>
      </div>

      {/* List Item Button */}
      <button
        style={styles.listButton}
        className="w-full mt-6"
        onClick={handleListItem}
      >
        list item
      </button>
    </div>
  );
}

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '-100px',
    marginBottom: '10px',
    width: '100%',
  },
  heading: {
    color: 'white',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    textAlign: 'center',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '40px',
    height: '40px',
    marginTop: '13px',
    marginRight: '2px',
    borderRadius: '50%',
    backgroundColor: '#343537',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },  
  photoUploadBox: {
    position: 'relative',
    width: '100%',
    maxWidth: '370px',
    height: '370px',
    marginBottom: '24px',
    marginLeft: '30px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    backgroundColor: '#343537',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#FFF',
    marginLeft: '30px',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '13px',
  },
  input: {
    position: 'relative',
    width: '100%',
    maxWidth: '340px',
    height: '50px',
    marginLeft: '30px',
    backgroundColor: '#343537',
    borderRadius: '10px',
    color: 'white',
    padding: '0 16px',
    fontFamily: 'Plus Jakarta Sans',
    border: 'none',
    marginBottom: '25px',
    outline: 'none',
  },
  activeButton: {
    flex: '1',
    height: '50px',
    width: '180px',
    borderRadius: '25px',
    marginRight: '10px',
    backgroundColor: '#73AB84',
    color: 'white',
    border: 'none',
    fontFamily: 'Plus Jakarta Sans',
    textAlign: 'center',
  },
  inactiveButton: {
    flex: '1',
    height: '50px',
    marginLeft: '30px',
    marginBottom:  '15px',
    width: '180px',
    borderRadius: '25px',
    marginRight: '10px',
    fontFamily: 'Plus Jakarta Sans',
    backgroundColor: '#343537',
    color: 'white',
    border: 'none',
    textAlign: 'center',
  },  
  listButton: {
    width: '370px',
    padding: '12px',
    backgroundColor: '#73AB84',
    borderRadius: '8px',
    marginLeft: '30px',
    color: 'black',
    border: 'none',
    marginTop: '15px',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '30px',
  },
  addPhotosText: {
    position: 'absolute',
    top: '65%',
    marginTop: '10px',
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '30px',
    fontWeight: 600,
    textAlign: 'center',
  },  
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '370px',
    marginLeft: '30px',
    marginBottom: '25px',
  },
  halfInput: {
    flex: 1,
    height: '50px',
    marginRight: '27px',
    backgroundColor: '#343537',
    borderRadius: '10px',
    color: 'white',
    padding: '0 16px',
    border: 'none',
    fontFamily: 'Plus Jakarta Sans',
  },
  donationButton: {
    flex: 1,
    height: '50px',
    borderRadius: '10px',
    width: '200px',
    backgroundColor: '#73AB84',
    color: 'white',
    border: 'none',
    fontWeight: 600,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};