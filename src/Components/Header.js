import React from 'react';
import Logo from '../Assets/logo.png';

const navLinksData = [
    { 
        id: 1, 
        label: "Microsoft 365" ,
        url: "https://www.microsoft.com/en-in/microsoft-365?rtc=1"
    },
    { 
        id: 2, 
        label: "Office" ,
        url: "https://www.microsoft.com/microsoft-365/microsoft-office"
    },
    { 
        id: 3, 
        label: "Window",
        url: "https://www.microsoft.com/en-in/windows/"
    },
    { 
        id: 4, 
        label: "Surface",
        url: "https://www.microsoft.com/en-in/surface"
    },
    { 
        id: 5, 
        label: "Xbox",
        url: "https://www.xbox.com/"
    },
    { 
        id: 6, 
        label: "Support",
        url: "https://support.microsoft.com/en-in"
    },
]

const Header = () => {
    return (
        <header>
            <div className="ms-log-container">
                <a href="www.microsoft.com"><img className="ms-logo"src={Logo}/></a>
            </div>
            <div className="nav-list-wrapper">
                <ul className="nav-item-list">
                    {
                        navLinksData.map(e => 
                            <li >
                                <a href={e.url}>{e.label}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="nav-icon-container">
                <a href="">
                    <span>All Microsoft</span> 
                    <i className="fa fa-chevron-down"/>
                </a>
                <ul className="nav-icon-list">
                    <li><a href="#"><i className="fa fa-search"/></a></li>
                    <li><a href="https://www.microsoft.com/en-in/store/cart"><i className="fa fa-shopping-cart"/></a></li>
                    <li><a href="https://www.microsoft.com/mscomhp/onerf/signin?EEL=True&pcexp=True&ru=https%3A%2F%2Fwww.microsoft.com%2Fen-in%2F"><i className="fa fa-user-circle"></i></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;