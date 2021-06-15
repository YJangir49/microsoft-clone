import React from 'react';
import Logo from '../Assets/logo.png';

const Header = () => {
    return (
        <header>
        <div class="ms-log-container">
            <a href="www.microsoft.com"><img class="ms-logo"src={Logo}/></a>
        </div>
        
        <div class="nav-list-wrapper">
            <ul class="nav-item-list">
                <li class="first-nav-li-item">
                    <a href="https://www.microsoft.com/en-in/microsoft-365?rtc=1">Microsoft 365</a>
                </li>
                <li>
                    <a href="https://www.microsoft.com/microsoft-365/microsoft-office">Office</a>
                </li>
                <li>
                    <a href="https://www.microsoft.com/en-in/windows/">Windows</a>
                </li>
                <li>
                    <a href="https://www.microsoft.com/en-in/surface">Surface</a>
                </li>
                <li>
                    <a href="https://www.xbox.com/">Xbox</a>
                </li>
                <li>
                    <a href="https://support.microsoft.com/en-in">Support</a>
                </li>
            </ul>
        </div>
        <div class="nav-icon-container">
            <a href=""><span>All Microsoft</span> <i class="fa fa-chevron-down"></i></a>
            <ul class="nav-icon-list">
                <li><a href="#"><i class="fa fa-search"></i></a></li>
                <li><a href="https://www.microsoft.com/en-in/store/cart"><i class="fa fa-shopping-cart"></i></a></li>
                <li><a href="https://www.microsoft.com/mscomhp/onerf/signin?EEL=True&pcexp=True&ru=https%3A%2F%2Fwww.microsoft.com%2Fen-in%2F"><i class="fa fa-user-circle"></i></a></li>
            </ul>
        </div>
    </header>
    )
}

export default Header;