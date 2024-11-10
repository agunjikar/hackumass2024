import React from 'react';

export default function Profile() {
  return (
    <div className="container">
        <h1 style={styles.heading}>profile</h1>
        <div className="profile">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            style={styles.circle}
            >
            <circle cx="60" cy="60" r="59.5" fill="var(--Backgrounds-Primary, #2B2B2B)" stroke="#C1C1C1" strokeWidth="1" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="67"
                viewBox="0 0 73 67"
                x="23.5"
                y="26.5"
            >
                <path
                d="M36.5 46.8824C49.2574 46.8824 59.5993 36.6112 59.5993 23.9412C59.5993 11.2711 49.2574 1 36.5 1C23.7426 1 13.4007 11.2711 13.4007 23.9412C13.4007 36.6112 23.7426 46.8824 36.5 46.8824ZM36.5 46.8824C51.3665 46.8824 64.4438 54.4904 72 66M36.5 46.8824C21.6335 46.8824 8.55616 54.4904 1 66"
                stroke="#C1C1C1"
                fill="var(--Backgrounds-Primary, #2B2B2B)"
                strokeWidth="2"
                strokeLinecap="round"
                />
            </svg>
            </svg>
            <div style={styles.userInfo}>
            <h2 style={styles.userName}>some name</h2>
            <p style={styles.userEmail}>username | email@university.edu</p>
            </div>
        </div>
        
        <div style={styles.menuBox}>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0.5 0.5H23.5V23.5H0.5V0.5Z" stroke="#C1C1C1"/>
                    <g filter="url(#filter0_d_5_5)">
                        <path d="M2 3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM6 15H18V17H6V15ZM14 7H18V9H14V7ZM14 11H18V13H14V11Z" fill="#D9D9D9"/>
                        <path d="M4 4.5H3.5V5V19V19.5H4H20H20.5V19V5V4.5H20H4ZM8 8.5H7.5V9V11V11.5H8H10H10.5V11V9V8.5H10H8ZM2.5 20.007V3.99504C2.50129 3.86425 2.55378 3.73915 2.64624 3.64659C2.73866 3.55408 2.86362 3.50147 2.99433 3.5H21.008C21.2792 3.5 21.5 3.72049 21.5 3.993V20.0049C21.4987 20.1357 21.4462 20.2608 21.3538 20.3534C21.2613 20.4459 21.1363 20.4985 21.0056 20.5H2.9925C2.86184 20.4999 2.73657 20.4479 2.64422 20.3554C2.55187 20.263 2.5 20.1377 2.5 20.007ZM6.5 7.5H11.5V12.5H6.5V7.5ZM17.5 15.5V16.5H6.5V15.5H17.5ZM14.5 7.5H17.5V8.5H14.5V7.5ZM14.5 11.5H17.5V12.5H14.5V11.5Z" stroke="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_5_5" x="-2" y="3" width="28" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_5"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_5" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                </div>
                <span style={styles.menuText}>edit information</span>
            </div>
            </div>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g filter="url(#filter0_d_5_60)">
                        <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_5_60" x="-2" y="2" width="28" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_60"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_60" result="shape"/>
                        </filter>
                    </defs>
                    </svg>
                </div>
                <span style={styles.menuText}>notifications</span>
            </div>
            <span style={styles.statusOn}>ON</span>
            </div>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g filter="url(#filter0_d_5_86)">
                        <path d="M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6H14.032C13.2606 8.32208 12.0295 10.465 10.412 12.301C11.1333 12.9446 11.9157 13.5163 12.748 14.008L11.997 15.886C10.9225 15.2766 9.9176 14.552 9 13.725C7.21358 15.3417 5.09804 16.5522 2.799 17.273L2.263 15.344C4.23284 14.7159 6.04802 13.6793 7.59 12.302C6.44869 11.0099 5.49806 9.56127 4.767 8H7.007C7.56435 9.02886 8.23267 9.9936 9 10.877C10.2501 9.4361 11.2353 7.7853 11.91 6.001L2 6V4H8V2H10ZM17.5 12.885L16.253 16H18.745L17.5 12.885Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_5_86" x="-2" y="2" width="28.9" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_86"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_86" result="shape"/>
                        </filter>
                    </defs>
                    </svg>
                </div>
                <span style={styles.menuText}>language</span>
            </div>
            <span style={styles.statusEnglish}>English</span>
            </div>
        </div>

        <div style={styles.menuSmallBox}>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_2_615)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57143 0C1.15127 0 0 1.15127 0 2.57143V12.8571C0 14.2773 1.15127 15.4286 2.57143 15.4286H21.4286C22.8487 15.4286 24 14.2773 24 12.8571V2.57143C24 1.15127 22.8487 0 21.4286 0H2.57143ZM13.0714 2.49285C13.0714 1.90111 12.5917 1.42142 12 1.42142C11.4082 1.42142 10.9285 1.90111 10.9285 2.49285V3.17938C9.6222 3.33024 8.60794 4.44015 8.60794 5.78695C8.60794 7.02055 9.4669 8.08773 10.672 8.35135L12.7231 8.80003C13.0299 8.86714 13.2492 9.13934 13.2492 9.45413C13.2492 9.82416 12.9492 10.1238 12.5802 10.1238H11.4199C11.1302 10.1238 10.8809 9.93919 10.7886 9.67788C10.5914 9.11998 9.97927 8.82756 9.42135 9.02475C8.86346 9.22195 8.57103 9.83407 8.76823 10.392C9.10102 11.3335 9.92163 12.0465 10.9285 12.2239V12.9358C10.9285 13.5275 11.4082 14.0072 12 14.0072C12.5917 14.0072 13.0714 13.5275 13.0714 12.9358V12.2239C14.3905 11.9914 15.3921 10.8391 15.3921 9.45413C15.3921 8.13309 14.4723 6.98914 13.1811 6.70668L11.1299 6.25798C10.9086 6.20957 10.7508 6.01354 10.7508 5.78695C10.7508 5.52065 10.9667 5.30477 11.233 5.30477H12.5802C12.7782 5.30477 12.9551 5.38946 13.0791 5.52806C13.1374 5.59313 13.1825 5.66875 13.2114 5.75071C13.4086 6.30862 14.0207 6.60105 14.5787 6.40385C15.1366 6.20666 15.429 5.59452 15.2318 5.03661C15.1079 4.68622 14.9172 4.36867 14.6758 4.09894C14.2657 3.64077 13.705 3.31663 13.0714 3.20479V2.49285ZM4.71429 6.42857C5.42436 6.42857 6 7.00421 6 7.71429C6 8.42436 5.42436 9 4.71429 9C4.00421 9 3.42857 8.42436 3.42857 7.71429C3.42857 7.00421 4.00421 6.42857 4.71429 6.42857ZM19.2857 6.42857C19.9958 6.42857 20.5714 7.00421 20.5714 7.71429C20.5714 8.42436 19.9958 9 19.2857 9C18.5757 9 18 8.42436 18 7.71429C18 7.00421 18.5757 6.42857 19.2857 6.42857ZM7.71429 16.9286C8.30602 16.9286 8.78571 17.4082 8.78571 18V21.4286C8.78571 22.0203 8.30602 22.5 7.71429 22.5C7.12255 22.5 6.64286 22.0203 6.64286 21.4286V18C6.64286 17.4082 7.12255 16.9286 7.71429 16.9286ZM17.3571 18C17.3571 17.4082 16.8775 16.9286 16.2857 16.9286C15.694 16.9286 15.2143 17.4082 15.2143 18V21.4286C15.2143 22.0203 15.694 22.5 16.2857 22.5C16.8775 22.5 17.3571 22.0203 17.3571 21.4286V18ZM13.0714 19.2857C13.0714 18.6939 12.5917 18.2143 12 18.2143C11.4083 18.2143 10.9286 18.6939 10.9286 19.2857V22.7143C10.9286 23.3061 11.4083 23.7857 12 23.7857C12.5917 23.7857 13.0714 23.3061 13.0714 22.7143V19.2857Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_615">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                </div>
                <span style={styles.menuText}>payment method</span>
            </div>
            </div>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_2_616)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5665 8.95854H19.7143C20.8509 8.95854 21.941 9.41007 22.7448 10.2138C23.5485 11.0175 24 12.1076 24 13.2443V20.1014C24 20.5747 23.6162 20.9585 23.1429 20.9585H20.6679C20.6352 22.6439 19.2586 24 17.5656 24C15.8723 24 14.4959 22.6439 14.4631 20.9585H8.57083C8.53805 22.6439 7.16162 24 5.46842 24C3.77524 24 2.3988 22.6439 2.36602 20.9585H0.857143C0.383756 20.9585 0 20.5747 0 20.1014V8.1014C0 7.4194 0.270919 6.76535 0.753156 6.28312C1.23539 5.80088 1.88944 5.52997 2.57143 5.52997H12.8571C13.5391 5.52997 14.1932 5.80088 14.6754 6.28312C15.1196 6.72735 15.3846 7.31735 15.4236 7.94068V14.4251C15.4236 15.0168 15.9032 15.4965 16.495 15.4965C17.0867 15.4965 17.5665 15.0168 17.5665 14.4251V8.95854Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_616">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                </div>
                <span style={styles.menuText}>shipping address</span>
            </div>
            </div>
        </div>

        <div style={styles.menuBox}>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z" fill="white"/>
                    </svg>
                </div>
                <span style={styles.menuText}>help & support</span>
            </div>
            </div>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 3C21.552 3 22 3.448 22 4V18C22 18.552 21.552 19 21 19H6.455L2 22.5V4C2 3.448 2.448 3 3 3H21ZM20 5H4V18.385L5.763 17H20V5ZM10.515 7.412L10.962 8.1C9.294 9.003 9.323 10.452 9.323 10.764C9.478 10.744 9.641 10.74 9.803 10.755C10.705 10.839 11.416 11.58 11.416 12.5C11.416 13.466 10.632 14.25 9.666 14.25C9.129 14.25 8.616 14.005 8.292 13.66C7.777 13.114 7.5 12.5 7.5 11.505C7.5 9.755 8.728 8.187 10.515 7.412ZM15.515 7.412L15.962 8.1C14.294 9.003 14.323 10.452 14.323 10.764C14.478 10.744 14.641 10.74 14.803 10.755C15.705 10.839 16.416 11.58 16.416 12.5C16.416 13.466 15.632 14.25 14.666 14.25C14.129 14.25 13.616 14.005 13.292 13.66C12.777 13.114 12.5 12.5 12.5 11.505C12.5 9.755 13.728 8.187 15.515 7.412Z" fill="white"/>
                    </svg>
                </div>
                <span style={styles.menuText}>contact us</span>
            </div>
            </div>
            <div style={styles.menuItem}>
            <div style={styles.menuItemLeft}>
                <div style={styles.iconPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z" fill="white"/>
                </svg>
                </div>
                <span style={styles.menuText}>privacy policy</span>
            </div>
            </div>
        </div>

        <button style={styles.logoutButton}>log out</button>

        <div style={styles.bottomBar}>
            <img src='images/bottom-nav-search.svg' style={styles.bottomIcon} alt='explore' />
            <img src='images/bottom-nav-heart.svg' style={styles.bottomIcon} alt='heart' />
            <img src='images/bottom-nav-bid.svg' style={styles.bottomIcon} alt='bid' />
            <img src='images/bottom-nav-profile-active.svg' style={styles.bottomIcon} alt='profile' />
        </div>

    </div>
  );
}

const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#2B2B2B',
      minHeight: '100vh',
    },
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginBottom: '30px',
      position: 'relative',
    },
    heading: {
      marginLeft: '30px',
      color: 'white',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      alignSelf: 'flex-start',
      marginBottom: '20px',
    },
    circle: {
      width: '120px',
      height: '120px',
      flexShrink: 0,
      marginLeft: '150px'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      width: '100%',
    },
    userName: {
      width: 'auto',
      color: '#FFF',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      textAlign: 'center',
      margin: '0',
      marginBottom: '8px',
    },
    userEmail: {
      width: 'auto',
      color: '#FFF',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      textAlign: 'center',
      margin: '0',
      marginBottom: '30px',
    },
    menuBox: {
        width: '342px',
        height: '100px',
        flexShrink: 0,
        borderRadius: '8px',
        background: '#343537',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        padding: '16px',
        margin: '16px auto 30px auto',
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
    },
    menuItemLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    iconPlaceholder: {
        width: '24px',
        height: '24px',
        borderRadius: '4px',
    },
    menuText: {
        color: '#FFF',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontWeight: 700,
    },
    statusOn: {
        color: '#73AB84',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontWeight: 700,
    },
    statusEnglish: {
        color: '#73AB84',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontWeight: 700,
    },
    logoutButton: {
        width: '376px',
        height: '48px',
        background: '#73AB84',
        borderRadius: '8px',
        border: 'none',
        color: 'black',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '16px',
        fontWeight: 700,
        margin: '16px auto',
        display: 'block',
        cursor: 'pointer',
    },
    menuSmallBox: {
        width: '342px',
        height: '60px',
        flexShrink: 0,
        borderRadius: '8px',
        background: '#343537',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        padding: '16px',
        margin: '16px auto 30px auto',
        marginBottom: '30px',
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
    }
};