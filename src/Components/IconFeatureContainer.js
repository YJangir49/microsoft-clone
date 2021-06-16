import React from 'react';
import WindowIcon from '../Assets/windowsicon.png';
import Icon from '../Assets/icon.png';
import Icon3 from '../Assets/icon3.png';
import Icon4 from '../Assets/icon4.png';

const iconData = [
    { 
        id: 1, 
        imgSrc: WindowIcon,
        label: "Choose your Microsoft 365" ,
        url: "https://www.microsoft.com/en-in/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365"
    },
    { 
        id: 2, 
        imgSrc: Icon,
        label: "Explore Surface devices" ,
        url: "https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface"
    },
    { 
        id: 3, 
        imgSrc: Icon3,
        label: "Buy Xbox games",
        url: "https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox"
    },
    { 
        id: 4, 
        imgSrc: Icon4,
        label: "Shop for Window 10",
        url: "https://www.microsoft.com/en-in/store/b/windows?icid=MSCOM_QL_Windows"
    },
]

const IconsFeatureContainer = () => {
    return (
        <section>
            <div className="program-icon-list-container">
                <ul className="program-icon-list">
                {
                    iconData.map(e => 
                        <li key={e.id}>
                            <a href={e.url}>
                                <img src={e.imgSrc} alt={e.label}/>
                                <div>{e.label}</div>
                            </a>
                        </li>
                    )
                }
                </ul>
            </div>
        </section>
    )
}

export default IconsFeatureContainer;