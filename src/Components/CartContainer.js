import React from 'react';
import Cart from './Cart';
import CartImg1 from '../Assets/card-img-1.png';
import CartImg2 from '../Assets/card-img-2.png';
import CartImg3 from '../Assets/card-img-3.png';
import CartImg4 from '../Assets/card-img-4.png';

const cartData = [
    {
        id: 1, 
        url: "https://www.microsoft.com/en-in/surface/devices/surface-laptop-go?icid=mscom_marcom_CPH1a_SurfaceLaptopGo", 
        imgPath: CartImg1, 
        title: "Surface Laptop Go", 
        text: 'Make the most of every day with the sleek style and performance of our lightest Surface laptop.', 
        linkData: [
            { id: "a", label:"Shop now" }
        ]
    },
    {
        id: 2, 
        url: "https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_CPH2a_M365Family", 
        imgPath: CartImg2, 
        title: "Microsoft 365", 
        text: 'Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription.', 
        linkData: [
            { id: "a", label:"For up to 6 people" },
            { id: "b", label:"For 1 person" }
        ]
    },
    {
        id: 3, 
        url: "https://www.microsoft.com/en-in/microsoft-teams/teams-for-home?utm_campaign=Collab&utm_source=MSFTHome&utm_term=TFL&ocid=OO_TEAMS_CONS_MLGTM_FM_msfthome", 
        imgPath: CartImg3, 
        title: "Microsoft Teams", 
        text: "Chat, call and make plans with family and friends – all in one app.", 
        linkData: [
            { id: "1a", label:"Learn more" }
        ]
    },
    {
        id: 4, 
        url: "https://www.xbox.com/xbox-bethesda-games-showcase?icid=mscom_marcom_CPH4a_XboxBethesdaGamesShowcasePostEvent21", 
        imgPath: CartImg4, 
        title: "Xbox & Bethesda Games Showcase", 
        text: "Get the latest on game releases, plus exciting news and announcements.", 
        linkData: [
            { id: "a", label:"Stream it on demand" }
        ]
    },
];

const CartItemContainer = () => {
    return (
        <section className="cart-list-section">
            <ul className="cart-item-list">
                {
                    cartData.map(e => 
                        <li>
                            <Cart 
                                key={e.id} 
                                title={e.title} 
                                url={e.url} 
                                imgPath={e.imgPath}
                                text={e.text} 
                                linkData={e.linkData}
                            />
                        </li>
                    )
                }
            </ul>
        </section>

    )
}

export default CartItemContainer;