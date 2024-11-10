import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import { API_URL } from '../constants';
import axios from 'axios';
import { Notyf } from 'notyf';


export default function Discovery() {
    const notyf = new Notyf({
        duration: 2000,
        position: {
            x: 'right',
            y: 'top',
        }
    });

    const [search, setSearch] = useState('');
    const [searchIcon] = useState('images/search.svg');
    const [showFilters, setShowFilters] = useState(false);
    const [tab, setTab] = useState('hot');
    const [category, setCategoryState] = useState('all');
    const [price, setPriceState] = useState('all');
    const [listings, setListings] = useState([]);
    const [likedListings, setLikedListings] = useState([]);

    useEffect(() => {
        fetchListings();
    }, []);

    const fetchListings = () => {
        if (!localStorage.getItem('token')) {
            notyf.error('Please login first');
            window.location.href = '/login';
        }   

        let url = `${API_URL}/listings`;

        if (category !== 'all') {
            url += `?category=${category}`;
        }

        if (price !== 'all') {
            url += `?price=${price}`;
        }

        if (search) {
            url += `?search=${search}`;
        }

        url += `?filter=${tab}`;

        url += `&token=${localStorage.getItem('token')}`;

        axios.get(url)
            .then((response) => {
                setLikedListings(response.data.liked_listings); 
                setListings(response.data.listings);
            })
            .catch((error) => {
                notyf.error('Something went wrong');
            });
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleShowFilters = (val, filters) => {
        setShowFilters(val);
        console.log(filters);
        setCategoryState(filters.category);
        setPriceState(filters.price);
        console.log(category, price);
        fetchListings();
    };

    const handleSearchIconClick = () => {
        console.log(search);
        fetchListings();
        setSearch('');
    };

    return (
        showFilters ? <Filters changeFilters={handleShowFilters} category={category} price={price} /> : (
            <div className="container">
            <h1 style={styles.heading}>explore</h1>
            <div style={styles.header}>
                <div style={styles.searchBar}>
                    <input
                        type="text"
                        style={styles.input}
                        placeholder="Search for a product..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <img
                        src={searchIcon}
                        style={styles.searchIcon}
                        alt='search'
                        onClick={handleSearchIconClick}
                    />
                </div>
                <div style={styles.filter} onClick={() => {
                    setShowFilters(true);
                }}>
                    <img src="images/filter.svg" style={styles.filterIcon} alt='filter' />
                </div>
            </div>
            <div style={styles.tabs}>
                <div style={tab === "hot" ? styles.activeTab : styles.tab} onClick={() => {
                    setTab('hot');
                    fetchListings();
                }}>
                    <h2 style={styles.tabText}>hot</h2>
                </div>
                <div style={tab === "new" ? styles.activeTab : styles.tab} onClick={() => {
                    setTab('new');
                    fetchListings();
                }}>
                    <h2 style={styles.tabText}>new</h2>
                </div>
                <div style={tab === "donated" ? styles.activeTab : styles.tab} onClick={() => {
                    setTab('donated');
                    fetchListings();
                }}>
                    <h2 style={styles.tabText}>donated</h2>
                </div>
            </div>
            <div style={styles.listings}>
                {
                    listings && listings.map((listing, index) => {
                        return (
                            <div style={styles.listing} key={index}>
                                <img src="images/black-jacket.png" style={styles.listingImage} alt='listingImage' />
                                <div style={styles.listingDetails}>
                                    <div style={styles.headerComponent}>
                                        <p style={styles.listingTitle} onClick={() => {
                                            window.location.href = `/listing?id=${listing._id}`;
                                        }}>{listing.title}</p>
                                        <img src={likedListings.includes(listing._id) ? 'images/active-heart.svg' : 'images/heart.svg'} style={styles.heartIcon} alt='heart' onClick={() => {
                                            if (!localStorage.getItem('token')) {
                                                notyf.error('Please login first');
                                                window.location.href = '/login';
                                            }

                                            axios.post(`${API_URL}/wishlist/add`, {
                                                listing_id: listing._id,
                                                token: localStorage.getItem('token')
                                            })
                                                .then((response) => {
                                                    console.log("hello");
                                                    fetchListings();
                                                })
                                                .catch((error) => {
                                                    notyf.error('Something went wrong');
                                                });
                                                

                                        }}/>
                                    </div>
                                    <p style={styles.listingPrice}>${listing.price}</p>
                                    <p style={styles.listingDescription}>{listing.description}</p>
                                    <div style={styles.tags}>
                                        {   
                                            listing.tags.map((tag, index) => {
                                                return (
                                                    <p style={styles.tag} key={index}>{tag}</p>
                                                );
                                            })
                                        }
                                    </div>
                                    <div style={styles.tags}>
                                        <p style={styles.tag}>{listing.size}</p>
                                        <p style={styles.tag}>{listing.condition}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                
            </div>

            <div style={styles.spacer}></div>
            <div style={styles.bottomBar}>
                <img src='images/bottom-nav-search-active.svg' style={styles.bottomIcon} alt='explore' />
                <img src='images/bottom-nav-heart.svg' style={styles.bottomIcon} alt='heart' onClick={() => {
                    window.location.href = '/wishlist';
                }}/>
                <img src='images/bottom-nav-bid.svg' style={styles.bottomIcon} alt='bid' onClick={() => {
                    window.location.href = '/bid';
                }}/>
                <img src='images/bottom-nav-profile.svg' style={styles.bottomIcon} alt='profile' onClick={() => {
                    window.location.href = '/profile';
                }} />
            </div>
        </div>
        )
    );
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
        marginBottom: '10px'
    },
    'tags': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
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