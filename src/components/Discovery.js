import React from 'react'

export default function Discovery() {
  return (
    <div className="container">
        <h1 style={styles.heading}>explore</h1>
        <div style={styles.header}>
            <div style={styles.searchBar}>
                <input type="text" style={styles.input} placeholder="Search for a product..." />
                <img src="images/search.svg" style={styles.searchIcon} alt='search' />
            </div>
            <div style={styles.filter}>
                <img src="images/filter.svg" style={styles.filterIcon} alt='filter' />
            </div>
        </div>
        <div style={styles.tabs}>
            <div style={styles.activeTab}>
                <h2 style={styles.activeTabText}>hot</h2>
            </div>
            <div style={styles.tab}>
                <h2 style={styles.tabText}>new</h2>
            </div>
            <div style={styles.tab}>
                <h2 style={styles.tabText}>donated</h2>
            </div>
        </div>
        <div style={styles.listings}>
            <div style={styles.listing}>
                <img src="https://github.com/sheldor1510.png" style={styles.listingImage} alt='listingImage' />
                <div style={styles.listingDetails}>
                    <div style={styles.headerComponent}>
                        <p style={styles.listingTitle}>foam runners</p>
                        <img src='images/heart.svg' style={styles.heartIcon} alt='heart' />
                    </div>
                    <p style={styles.listingPrice}>$345</p>
                    <p style={styles.listingDescription}>good condition. almost new. worn maybe 3-4 times...</p>
                    <div style={styles.tags}>
                        <p style={styles.tag}>size: men's 12</p>
                        <p style={styles.tag}>comfy</p>
                    </div>
                </div>
            </div>
            <div style={styles.listing}>
                <img src="https://github.com/sheldor1510.png" style={styles.listingImage} alt='listingImage' />
                <div style={styles.listingDetails}>
                    <div style={styles.headerComponent}>
                        <p style={styles.listingTitle}>yeezy foam runners</p>
                        <img src='images/active-heart.svg' style={styles.heartIcon} alt='heart' />
                    </div>
                    <p style={styles.listingPrice}>$345</p>
                    <p style={styles.listingDescription}>good condition. almost new. worn maybe 3-4 times...</p>
                    <div style={styles.tags}>
                        <p style={styles.tag}>size: men's 12</p>
                        <p style={styles.tag}>comfy</p>
                    </div>
                </div>
            </div>
        </div>

        <div style={styles.spacer}></div>
        <div style={styles.bottomBar}>
            <img src='images/bottom-nav-search-active.svg' style={styles.bottomIcon} alt='explore' />
            <img src='images/bottom-nav-heart.svg' style={styles.bottomIcon} alt='heart' />
            <img src='images/bottom-nav-bid.svg' style={styles.bottomIcon} alt='bid' />
            <img src='images/bottom-nav-profile.svg' style={styles.bottomIcon} alt='profile' />
        </div>
    </div>
  )
}

const styles = {
    'heading': {
        marginLeft: '40px',
        fontSize: '40px',
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
    },
    'searchBar': {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25px',
        borderRadius: '50px',
        background: '#343537',
        width: '70%',
        height: '4rem'
    },
    'input': {
        background: 'none',
        border: 'none',
        outline: 'none',
        color: 'white',
        width: '70%',
        height: '100%',
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 400,
        lineHeight: 'normal',
        marginLeft: '20px',
        fontSize: '18px'
    },
    'searchIcon': {
        width: '40px',
        height: '40px',
        marginLeft: '15px'
    },
    'header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },
    'filter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: '10%',
        width: '3.5rem',
        height: '3.5rem',
        marginLeft: '1.2rem'
    },
    'filterIcon': {
        width: '30px',
        height: '30px'
    },
    'tabs': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '20px',
        marginLeft: '20px'
    },
    'tab': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#343537',
        borderRadius: '50px',
        width: 'fit-content',
        padding: '0 30px',
        height: '3rem',
        marginLeft: '1.2rem'
    },
    'tabText': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '18px'
    },
    'activeTab': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#73AB84',
        borderRadius: '50px',
        width: 'fit-content',
        padding: '0 30px',
        height: '3rem',
        marginLeft: '10px'
    },
    'activeTabText': {
        color: '#343537',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '18px'
    },
    'listings': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '30px'
    },
    'listing': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        background: '#343537',
        borderRadius: '20px',
        width: '90%',
        marginBottom: '25px',
        height: 'fit-content'
    },
    'listingImage': {
        width: '10rem',
        height: '10rem',
        borderRadius: '20px',
        marginLeft: '20px',
    },
    'listingDetails': {
        flexDirection: 'column',
        alignItems: 'top',
        justifyContent: 'top',
        marginLeft: '20px',
        minHeight: '12rem',
        height: 'fit-content',
        marginBottom: '10px',
    },
    'headerComponent': {
        display: 'flex',
        alignItems: 'center',
        width: '10.5rem',
        justifyContent: 'space-between',
    },
    'heartIcon': {
        width: '35px',
        height: '35px',
        marginLeft: '15px',
        marginTop: '10px'
    },
    'listingTitle': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '18px',
        marginBottom: '12px'
    },
    'listingPrice': {
        color: 'white',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '0px',
        marginBottom: '12px'
    },
    'listingDescription': {
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 400,
        fontSize: '13px',
        width: '11rem',
        marginTop: '0px',
        marginBottom: '0px'
    },
    'tags': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: '5px'
    },
    'tag': {
        background: '#EDF2D7',
        borderRadius: '50px',
        color: '#1F4F2E',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 600,
        fontSize: '12px',
        padding: '5px 10px',
        marginRight: '10px'
    },
    bottomBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#343537',
        width: '100%',
        height: '5rem',
        position: 'fixed',
        bottom: '0px'
    },
    bottomIcon: {
        color: 'white',
    },
    spacer: {
        height: '7rem',
    }
}