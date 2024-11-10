import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';
import axios from 'axios';
import { Notyf } from 'notyf';

export default function NewListing() {
  const [imageUrl, setImageUrl] = useState('');

  const handleAddPhotos = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        
        // Set up the headers and FormData for the Imgur API request
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID 0c5e90e2f7ed3a3");

        const formdata = new FormData();
        formdata.append("image", file);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow"
        };

        // Upload the image and get the URL
        fetch("https://api.imgur.com/3/image", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.success) {
              setImageUrl(result.data.link); // Store the image URL in the state
              console.log("Image URL:", result.data.link);
            } else {
              console.error("Failed to upload image:", result);
            }
          })
          .catch(error => console.error("Error:", error));
      }
    };

    fileInput.click();
  };
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }, []);

  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    }
  });

  // States for input fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [size, setSize] = useState('');
  const [bidPrice, setBidPrice] = useState('');
  const [tags, setTags] = useState('');
  const [price, setPrice] = useState('');
  const [donation, setDonation] = useState(false);
  const [category, setCategory] = useState('clothing');

  // Function to handle listing item
  const handleListItem = () => {
    if (!title || !description || !condition || !size || !tags || !price) {
      notyf.error('Please fill all the fields');
      return;
    }

    let listingData = {
      category,
      title,
      description,
      condition,
      size,
      bidPrice: Number(bidPrice),
      tags,
      price: Number(price),
      donation,
      photos: [imageUrl],
      user_id: localStorage.getItem('token'),
    };

    if (donation) {
      listingData.price = 0;
      listingData.bidPrice = 0;
    }

    axios.post(`${API_URL}/listings/new`, listingData)
    .then((response) => {
      notyf.success('Item listed successfully');
      window.location.href = '/bid?state1=ongoing&state2=selling';
    })
    .catch((error) => {
      notyf.error('Something went wrong');
    });
  };

  return (
    <div className="container p-6 bg-black text-white max-w-md mx-auto">
      {/* Header with title and close button */}
      <div style={styles.headerContainer}>
        <h1 style={styles.heading}>new listing</h1>
        <div style={styles.closeButton} className="flex items-center justify-center" onClick={() => {
          window.location.href = '/bid';
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
            <path d="M15.8334 4.16667L4.16669 15.8333M4.1667 4.16667L15.8334 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

       {/* Add Photos Button */}
       <div
        style={styles.photoUploadBox}
        onClick={!imageUrl ? handleAddPhotos : undefined} // Disable click if image is uploaded
        className="flex flex-col items-center justify-center mb-6 relative">
          {imageUrl ? (
          // Display the uploaded image
          <img src={imageUrl} alt="Uploaded" style={{ width: '100%', height: '100%', borderRadius: '48.75px', objectFit: 'cover' }} />
          ) : (
            <>
      <svg xmlns="http://www.w3.org/2000/svg" width="370" height="370" fill="none">
        <rect x="1.25" y="1.25" width="368.5" height="368.5" rx="48.75" stroke="#73AB84" strokeWidth="2.5" />
      </svg>
      <div style={styles.innerCircle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" fill="none">
          <path d="M28.5 12.5v33M12.5 28.5h33" stroke="#73AB84" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div style={styles.addPhotosText}>add photos</div>
    </>
  )}
</div>



      {/* Category Section */}
      <div className="mb-20" style={{ marginBottom: 15 }}>
        <div style={styles.label}>category</div>
        <div className="flex gap-2 mb-4">
          <button style={category === "electronics" ? styles.activeButton : styles.inactiveButton} onClick={() => {
            setCategory('electronics');
          }}>Electronics</button>
          <button style={category === "books" ? styles.activeButton : styles.inactiveButton} onClick={() => {
            setCategory('books');
          }}>Books</button>
        </div>
        <div className="flex gap-2">
          <button style={category === "clothing" ? styles.activeButton : styles.inactiveButton} onClick={() => {
            setCategory('clothing');
          }}>Clothing</button>
          <button style={category === "sneakers" ? styles.activeButton : styles.inactiveButton} onClick={() => {
            setCategory('sneakers');
          }}>Sneakers</button>
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
            disabled={donation}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button style={donation ? styles.activeDonationButton : styles.donationButton} onClick={() => {
            setPrice('');
            setBidPrice('');
            setDonation(!donation);
          }}>It's a donation</button>
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
    width: '150px',
    marginLeft: '30px',
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
    width: '150px',
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
    outline: 'none'
  },
  donationButton: {
    flex: 1,
    height: '50px',
    borderRadius: '10px',
    width: '200px',
    backgroundColor: '#343537',
    color: 'white',
    border: 'none',
    fontWeight: 600,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDonationButton: {
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
  }
};