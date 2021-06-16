import React from 'react';

const data = [
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

const Footer = () => {
    return (
        <footer className="footer-container">
            <ul className="footer-col-lists">
                {
                    data.map(list => 
                        <li key={list.id}>
                            <ul className="footer-col-item-lists" >
                                <p>{list.title}</p>
                                {
                                    list.links.map(e => 
                                        <li key={e.id}><a href={e.url}>{e.label}</a></li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ul>
        </footer>
    )
}

export default Footer;