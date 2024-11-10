import React from 'react'

export default function Filters() {
  return (
    <div className="container">
        <div style={styles.headerContainer}>
            <h1 style={styles.heading}>filters</h1>
            <img src="images/close-icon.svg" style={styles.closeIcon} />
        </div>
        <div style={styles.specialTab}>Categories: All</div>
        <div style={styles.tabs}>
            <div style={styles.activeTab}>Electronics</div>
            <div style={styles.tab}>Books</div>
            <div style={styles.tab}>Clothing</div>
            <div style={styles.activeTab}>Sneakers</div>
        </div>
        <div style={styles.specialTab}>Price Range: Any</div>
        <div style={styles.priceTabs}>
            <div style={styles.activePriceTab}>Under $50</div>
            <div style={styles.priceTab}>$50-$100</div>
            <div style={styles.priceTab}>$100-$150</div>
            <div style={styles.priceTab}>$150-$200</div>
            <div style={styles.priceTab}>$200-$250</div>
            <div style={styles.priceTab}>$250-$300</div>
        </div>
    </div>
  )
}

const styles = {
    'headerContainer': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    'heading': {
        marginLeft: '40px',
        fontSize: '40px',
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
    },
    closeIcon: {
        marginRight: '35px'
    },
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        width: '10.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginLeft: '40px',
        marginRight: '40px',
        marginBottom: '60px',
    },
    tab: {
        backgroundColor: '#343537',
        borderRadius: '10%',
        color: 'black',
        padding: '20px',
        textAlign: 'center',
        fontFamily: "Plus Jakarta Sans",
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        color: 'white',
        minWidth: '8rem',
        width: 'fit-content',
        borderRadius: '50px',
    },
    activeTab: {
        backgroundColor: '#73AB84',
        borderRadius: '10%',
        color: 'black',
        padding: '20px',
        textAlign: 'center',
        fontFamily: "Plus Jakarta Sans",
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        color: 'white',
        minWidth: '8rem',
        width: 'fit-content',
        borderRadius: '50px',
    },
    specialTab: {
        backgroundColor: '#343537',
        borderRadius: '10%',
        color: 'black',
        padding: '20px',
        textAlign: 'center',
        fontFamily: "Plus Jakarta Sans",
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        color: 'white',
        minWidth: '10.5rem',
        height: 'fit-content',
        borderRadius: '50px',
        marginLeft: '30px',
        marginRight: '30px',
        marginTop: '20px',
        marginBottom: '30px',
    },
    priceTabs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        width: '10rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 3fr)',
        gap: '20px',
        marginLeft: '40px',
        marginRight: '40px',
    },
    priceTab: {
        backgroundColor: '#343537',
        borderRadius: '10%',
        color: 'black',
        padding: '20px',
        textAlign: 'center',
        fontFamily: "Plus Jakarta Sans",
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        color: 'white',
        height: 'fit-content',
        borderRadius: '50px',
    },
    activePriceTab: {
        backgroundColor: '#73AB84',
        borderRadius: '10%',
        color: 'black',
        padding: '20px',
        textAlign: 'center',
        fontFamily: "Plus Jakarta Sans",
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 'normal',
        color: 'white',
        height: 'fit-content',
        borderRadius: '50px',
    },
}
