import React, { useState } from 'react'

export default function PlaceBid() {
    const [bid, setBid] = useState('');

    const handleBidChange = (event) => {
        setBid(event.target.value);
    };

    const handlePlaceBid = () => {
        console.log(`Bid placed: ${bid}`);
    };

    return (
        <div className="container">
                <h1 style={styles.heading}>bid</h1>
                <h2 style={styles.bidPrompt}>enter bid amount</h2>
                <input 
                    type="text" 
                    placeholder="$10" 
                    style={styles.bidText} 
                    value={bid} 
                    onChange={handleBidChange}
                />
                <h3 style={styles.description}>When you place your bid, it means you're committing to buy this item if you're the winning bidder.</h3>
                <button style={styles.button} onClick={handlePlaceBid}>place bid</button>
        </div>
    )
}

const styles = {
        'heading': {
                fontSize: 60,
                fontWeight: 600,
                marginLeft: '6vw',
                marginTop: '2vh',
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
        },
        'bidPrompt': {
                fontSize: 20,
                fontWeight: 600,
                marginLeft: '6vw',
                marginTop: '6vh',
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
        },
        'bidText': {
                fontSize: 48,
                fontWeight: 400,
                marginLeft: '6vw',
                height: '7vh',
                width: '78vw',
                backgroundColor: '#343537',
                fontFamily: 'Plus Jakarta Sans',        
                border: '10px',
                outline: 'none',
                color: 'white',
                padding: '22px 22px',
                borderRadius: '10px'
        },

        'description': {
                height: '7vh',
                width: '83vw',
                marginLeft: '7vw',
                marginTop: '46vh',
                fontSize: '16px',
                fontStyle: 'normal',
                lineHeight: '25px',
                fontWeight: 300,
                color: 'white',
                opacity: '65%',
                fontFamily: 'Plus Jakarta Sans',
        },

        'button': {
                height: '8vh',
                width: '86vw',
                marginLeft: '7vw',
                marginTop: '1vh',
                padding: '15px 30px',
                fontSize: '22px',
                textAlign: 'center',
                fontStyle: 'normal',
                color: "black",
                lineHeight: 'normal',
                backgroundColor: '#73AB84',
                border: 'none',
                borderRadius: '30px',
                fontFamily: 'Plus Jakarta Sans',
                // cursor: 'pointer',
            },

}
