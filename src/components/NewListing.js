import React from 'react'

export default function Register() {
  return (
    <div className="container p-6 bg-black text-white max-w-md mx-auto">
      <div style={styles.headerContainer}>
        <h1 style={styles.heading}>new listing</h1>
        <div style={styles.closeButton} className="flex items-center justify-center">
          <span>✕</span>
        </div>
      </div>

      <div style={styles.photoUploadBox} className="flex items-center justify-center mb-6">
        <div style={styles.innerCircle} className="flex items-center justify-center">
          <div style={styles.plusSign}>+</div>
        </div>
      </div>

      <div className="mb-6">
        <div style={styles.label}>category</div>
        <div className="flex gap-2 flex-wrap">
          <button style={styles.activeButton}>Electronics</button>
          <button style={styles.inactiveButton}>Books</button>
          <button style={styles.inactiveButton}>Clothing</button>
          <button style={styles.activeButton}>Sneakers</button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div style={styles.label}>title</div>
          <input 
            type="text" 
            placeholder="Nike Hoodie"
            style={styles.input}
          />
        </div>

        <div>
          <div style={styles.label}>description</div>
          <input 
            type="text" 
            placeholder="Nike Hoodie"
            style={styles.input}
          />
        </div>

        <div>
          <div style={styles.label}>condition</div>
          <input 
            type="text" 
            placeholder="gently used"
            style={styles.input}
          />
        </div>

        <div>
          <div style={styles.label}>size</div>
          <input 
            type="text" 
            placeholder="us large"
            style={styles.input}
          />
        </div>

        <div>
          <div style={styles.label}>price</div>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="$65"
              style={styles.input}
            />
            <input 
              type="text" 
              placeholder="It's a donation"
              style={styles.input}
            />
          </div>
        </div>

        <div>
          <div style={styles.label}>bid price</div>
          <input 
            type="text" 
            placeholder="$30 or higher"
            style={styles.input}
          />
        </div>

        <div>
          <div style={styles.label}>tags</div>
          <input 
            type="text" 
            placeholder="comfy, designer, party, casual"
            style={styles.input}
          />
        </div>
      </div>

      <button style={styles.listButton} className="w-full mt-6">
        list item
      </button>
    </div>
  )
}

const styles = {
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      position: 'relative'
    },
    heading: {
      color: 'white',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 600,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    closeButton: {
      width: '50px',
      height: '50px',
      flexShrink: 0,
      borderRadius: '50px',
      background: '#343537',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      border: 'none' // Removed any extra borders
    },
    photoUploadBox: {
      width: '370px',
      height: '370px',
      flexShrink: 0,
      border: '2.5px solid #73AB84',
      borderRadius: '12px'
    },
    innerCircle: {
      width: '100px',
      height: '100px',
      flexShrink: 0,
      borderRadius: '50px',
      background: '#343537',
      border: 'none' // Removed any extra borders
    },
    plusSign: {
      width: '40px',
      height: '40px',
      transform: 'rotate(-45deg)',
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
      width: '47px',
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      marginBottom: '8px'
    },
    input: {
      width: '346px',
      height: '66px',
      flexShrink: 0,
      background: '#343537',
      borderRadius: '10px',
      color: 'white',
      padding: '0 16px',
      border: 'none', // Removed any extra borders
      boxShadow: 'none' // Removed any extra shadow effects
    },
    activeButton: {
      width: '183px',
      height: '50px',
      borderRadius: '50px',
      background: '#73AB84',
      color: 'white',
      border: 'none', // Removed any extra borders
      boxShadow: 'none' // Removed any extra shadow effects
    },
    inactiveButton: {
      width: '183px',
      height: '50px',
      borderRadius: '50px',
      background: '#343537',
      color: 'white',
      border: 'none', // Removed any extra borders
      boxShadow: 'none' // Removed any extra shadow effects
    },
    listButton: {
      width: '100%',
      padding: '12px',
      background: '#73AB84',
      borderRadius: '8px',
      color: 'white',
      border: 'none', // Removed any extra borders
      boxShadow: 'none' // Removed any extra shadow effects
    }
  };
  