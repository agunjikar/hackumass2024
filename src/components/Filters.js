import React, { useState } from 'react'

export default function Filters({ changeFilters, category, price }) {
    const [categoryState, setCategoryState] = useState(category);
    const [priceState, setPriceState] = useState(price);

    const setCategory = (category) => {
        setCategoryState(category);
    }

    const setPrice = (price) => {
        setPriceState(price);
    }

  return (
    <div className="container">
        <div style={styles.headerContainer}>
            <h1 style={styles.heading}>filters</h1>
            <img src="images/close-icon.svg" style={styles.closeIcon} onClick={() => {
                changeFilters(false, {
                    category: categoryState,
                    price: priceState,
                });
            }} />
        </div>
        <div style={categoryState === "all" ? styles.activeSpecialTab : styles.specialTab} onClick={() => {
            setCategory('all');
        }}>Categories: All</div>
        <div style={styles.tabs}>
            <div style={categoryState === "electronics" ? styles.activeTab : styles.tab} onClick={() => {
                setCategory('electronics');
            }}>Electronics</div>
            <div style={categoryState === "books" ? styles.activeTab : styles.tab} onClick={() => {
                setCategory('books');
            }}>Books</div>
            <div style={categoryState === "clothing" ? styles.activeTab : styles.tab} onClick={() => {
                setCategory('clothing');
            }}>Clothing</div>
            <div style={categoryState === "sneakers" ? styles.activeTab : styles.tab} onClick={() => {
                setCategory('sneakers');
            }}>Sneakers</div>
        </div>
        <div style={priceState === "all" ? styles.activeSpecialTab : styles.specialTab} onClick={() => {
            setPrice('all');
        }}>Price Range: Any</div>
        <div style={styles.priceTabs}>
            <div style={priceState === "0-50" ? styles.activePriceTab : styles.priceTab} onClick={() => {
                setPrice('0-50');
            }}>Under $50</div>
            <div style={priceState === "50-100" ? styles.activePriceTab : styles.priceTab} onClick={() => {
                setPrice('50-100');
            }}>$50-$100</div>
            <div style={priceState === "100-150" ? styles.activePriceTab : styles.priceTab} onClick={() => {
                setPrice('100-150');
            }}>$100-$150</div>
            <div style={priceState === "150-200" ? styles.activePriceTab : styles.priceTab} onClick={() => {
                setPrice('150-200');
            }}>$150-$200</div>
            <div style={priceState === "200-250" ? styles.activePriceTab : styles.priceTab} onClick={() => {
                setPrice('200-250');
            }}>$200-$250</div>
            <div style={priceState === "250-300" ? styles.activePriceTab : styles.priceTab} onClick={() => {
                setPrice('250-300');
            }}>$250-$300</div>
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
    activeSpecialTab: {
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
