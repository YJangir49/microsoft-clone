import CartImg1 from '../Assets/card-img-1.png';
import CartImg2 from '../Assets/card-img-2.png';
import CartImg3 from '../Assets/card-img-3.png';
import CartImg4 from '../Assets/card-img-4.png';
import BuCartImg1 from '../Assets/business-cart-1.png';
import BuCartImg2 from '../Assets/business-cart-2.png';
import BuCartImg3 from '../Assets/business-cart-3.png';
import BuCartImg4 from '../Assets/business-cart-4.png';
import FacebookIcon  from '../Assets/facebook-icon.png';
import YoutubeIcon  from '../Assets/youtube-icon.png';
import TwitterIcon  from '../Assets/twitter-icon.png';

export const footerData = [
    { 
        id: '1', 
        title: "What's new", 
        links: [
            { id: 1, url: 'https://www.microsoft.com/microsoft-365', label:"Microsoft 365" },
            { id: 2, url: 'https://www.microsoft.com/en-in/surface/devices/surface-pro-x', label:"Surface Pro X" },
            { id: 3, url: 'https://www.microsoft.com/en-in/surface/devices/surface-pro-7', label:"Surface Pro 7" },
            { id: 4, url: 'https://www.microsoft.com/en-in/surface/devices/surface-laptop-3', label:"Surface Laptop 3" },
            { id: 5, url: 'https://www.microsoft.com/en-in/windows/windows-10-apps', label:"Windows 10 apps" },
        ]
    },
    { 
        id: '2', 
        title: "Microsoft Store", 
        links: [
            { id: 1, url: "https://account.microsoft.com/", label:"Account profile" },
            { id: 2, url: 'https://www.microsoft.com/en-in/download', label:"Download Center" },
            { id: 3, url: 'https://go.microsoft.com/fwlink/?linkid=2139749', label:"" },
            { id: 4, url: 'https://go.microsoft.com/fwlink/p/?LinkID=824764&clcid=0x4009', label:"Returns" },
            { id: 5, url: 'https://account.microsoft.com/orders', label:"Order tracking" },
        ]
    },
    { 
        id: '3', 
        title: "Education", 
        links: [
            { id: 1, url: "https://www.microsoft.com/en-in/education", label:"Microsoft in education" },
            { id: 2, url: 'https://www.microsoft.com/en-in/education/products/office/default.aspx', label:"Office for students" },
            { id: 3, url: 'https://products.office.com/en-in/academic/compare-office-365-education-plans', label:"Office 365 for schools" },
            { id: 4, url: 'https://azure.microsoft.com/en-in/community/education/', label:"Microsoft Azure in education" },
        ]
    },
    { 
        id: '4', 
        title: "Enterprise", 
        links: [
            { id: 1, url: "https://www.microsoft.com/en-in/education", label:"Microsoft in education" },
            { id: 2, url: "https://azure.microsoft.com/", label: "Azure" },
            { id: 3, url: "https://www.microsoft.com/enterprise/automotive", label: "Automotive"},
            { id: 4, url: "https://www.microsoft.com/enterprise/government", label: "Government"},
            { id: 5, url: "https://go.microsoft.com/fwlink/?LinkID=808093", label: "AppSource"},
            { id: 6, url: "https://www.microsoft.com/enterprise/health", label: "Healthcare"},
            { id: 7, url: "https://www.microsoft.com/enterprise/manufacturing", label: "Manufacturing"},
            { id: 8, url: "https://www.microsoft.com/enterprise/financial-services/banking-and-capital-markets", label: "Financial services"},
            { id: 9, url: "https://www.microsoft.com/enterprise/retail-consumer-goods", label: "Retail"},
        ]
    },
    { 
        id: '5', 
        title: "Developer", 
        links: [
            { id: "1", url: "https://visualstudio.microsoft.com/", label: "Microsoft Visual Studio" },
            { id: "2", url: "https://developer.microsoft.com/", label: "Developer Center" },
            { id: "3", url: "https://channel9.msdn.com/", label: "Channel 9" },
            { id: "4", url: "https://developer.microsoft.com/en-us/office", label: "Office Dev Center" },
        ]
    },
    { 
        id: '6', 
        title: "Company", 
        links: [
            { id: "1", url: "https://careers.microsoft.com/", label: "Careers" },
            { id: "2", url: "https://www.microsoft.com/en-in/about", label: "About Microsoft" },
            { id: "3", url: "https://news.microsoft.com/en-in", label: "Company news" },
            { id: "4", url: "https://privacy.microsoft.com/en-in", label: "Privacy at Microsoft" },
            { id: "5", url: "https://www.microsoft.com/investor/default.aspx", label: "Investors" },
            { id: "6", url: "https://www.microsoft.com/en-in/security/default.aspx", label: "Security" },
        ]
    },
]


export const SocialLinkData = [
    { id: 1, url: "https://www.facebook.com/MicrosoftIndia", imgSrc: FacebookIcon },
    { id: 2, url: "https://twitter.com/microsoftindia", imgSrc: TwitterIcon },
    { id: 3, url: "https://www.youtube.com/user/IndiaMicrosoftVideos", imgSrc: YoutubeIcon },
]

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
        text: 'Premium Office apps, extra cloud storage, advanced security, and more ??? all in one convenient subscription.', 
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
        text: "Chat, call and make plans with family and friends ??? all in one app.", 
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
        text: 'No matter what you do, there???s a Surface to help you do it.', 
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