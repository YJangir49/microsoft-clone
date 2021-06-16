import React from 'react';
import FacebookIcon  from '../Assets/facebook-icon.png';
import YoutubeIcon  from '../Assets/youtube-icon.png';
import TwitterIcon  from '../Assets/twitter-icon.png';

const SocialLinkData = [
    { id: 1, url: "https://www.facebook.com/MicrosoftIndia", imgSrc: FacebookIcon },
    { id: 2, url: "https://twitter.com/microsoftindia", imgSrc: TwitterIcon },
    { id: 3, url: "https://www.youtube.com/user/IndiaMicrosoftVideos", imgSrc: YoutubeIcon },
]

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