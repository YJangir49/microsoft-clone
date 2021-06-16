import React from 'react';
import { footerData } from '../Utils/data';
const Footer = () => {
    return (
        <footer className="footer-container">
            <ul className="footer-col-lists">
                {
                    footerData.map(list => 
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