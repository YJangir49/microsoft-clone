import React from 'react';
import { SocialLinkData } from '../Utils/data';

const SocialLinkContainer = ( ) => {
    return (
        <div class="social-div-container">
            <span>Follow Microsoft</span>
            <ul class="social-list">
                {
                    SocialLinkData.map(e => 
                        <li>
                            <a href={e.url}>
                               <img src={e.imgSrc} alt={e.id}/>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SocialLinkContainer;