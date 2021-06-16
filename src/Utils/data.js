import CartImg1 from '../Assets/card-img-1.png';
import CartImg2 from '../Assets/card-img-2.png';
import CartImg3 from '../Assets/card-img-3.png';
import CartImg4 from '../Assets/card-img-4.png';
import BuCartImg1 from '../Assets/business-cart-1.png';
import BuCartImg2 from '../Assets/business-cart-2.png';
import BuCartImg3 from '../Assets/business-cart-3.png';
import BuCartImg4 from '../Assets/business-cart-4.png';

export const ProductCartData = [
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
            { id: "a", label:"Learn more" }
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

export const BusinessCartData = [
    {
        id: 1, 
        url: "https://www.microsoft.com/en-in/surface/business?icid=mscom_marcom_CPW1a_SurfaceforBusiness", 
        imgPath: BuCartImg1, 
        title: "Surface for Business", 
        text: 'No matter what you do, there’s a Surface to help you do it.', 
        linkData: [
            { id: "a", label:"Shop now" }
        ]
    },
    {
        id: 2, 
        url: "https://www.microsoft.com/en-in/microsoft-365/business/compare-all-microsoft-365-business-products?icid=mscom_marcom_CPW2a_M365forBusiness&activetab=tab%3aprimaryr2",
        imgPath: BuCartImg2, 
        title: "Microsoft 365 for business", 
        text: "Stay a step ahead with powerful apps for productivity, connection and security.", 
        linkData: [
            { id: "a", label:"For 1 person" }
        ]
    },
    {
        id: 3, 
        url: "https://www.microsoft.com/en-in/evalcenter/evaluate-windows-10-enterprise?icid=mscom_marcom_CPW3a_Win10EnterpriseEval", 
        title: "Windows 10 Enterprise", 
        imgPath: BuCartImg3,
        text: "Download the free 90-day evaluation for IT professionals.", 
        linkData: [
            { id: "a", label:"Download now" }
        ]
    },
    {
        id: 4, 
        url: "https://www.microsoft.com/en-in/resilience/hybrid-work-solutions?icid=mscom_marcom_CPW4a_ResilienceHybridWork",
        imgPath: BuCartImg4, 
        title: "Hybrid work solutions", 
        text: "Learn about our approach, the lessons Microsoft is learning along the way, plus how to empower your employees and meet new customer needs.", 
        linkData: [
            { id: "a", label:"Learn more" }
        ]
    },
];