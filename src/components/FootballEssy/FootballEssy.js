import React from 'react';

import facebookImage from '../../images/Facebook.png';
import twitterImage from '../../images/Twitter.png';
import youtubeImage from '../../images/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
  
  library.add(
    faGoogle,
    faFacebook,
    faTwitter
  );



const FootballEssy = () => {
    return (
        <div>
            <h3 style={{color:'white',padding:'100px'}}>The history of football can be traced back to the ancient times of the Greeks. Everyone knows that the Greeks were great sportsmen and have invented many games.

Football happens to one of them. A similar game like football is played in many countries but the latest version of football that we knew originates in England. Likewise, England formulated the first rule of the game. From that day onwards the football has progressed in ways we can’t imagine.<br/>

Football is an important game from the point of view of the spectator as well as the player. This 90 minutes game is full of excitement and thrill.

Moreover, it keeps the player mentally and physically healthy, and disciplined. And this ninety-minute game tests their sportsmanship, patience, and tolerance.<br/>

Besides, all this you make new friends and develop your talent. Above all, it’s a global game that promotes peace among countries.<br/>
Learning any game is not an easy task. It requires dedication and hard work. Besides, all this the sport test your patience and insistence towards it. Moreover, with every new skill that you learn your game also improves. Above all, learning is a never-ending process so to learn football you have to be paying attention to every minute details that you forget to count or missed.<br/><br/><br/>

Football in India<br/><br/><br/>
If we look at the scenarios of a few years back then we can say that football was not a popular game in except West Bengal. Also, Indians do not take much interest in playing football. Likewise, the All India Football Federation (AIFF) has some limited resources and limited support from the government.
</h3>

                     <div style={{textAlign:'center',height:'50px'}}>

                     <a style={{color:'white'}} href="https://www.facebook.com"><FontAwesomeIcon style={{margin:'20px'}} icon={faFacebook} /></a>

                     <a style={{color:'white'}} href="https://www.youtube.com"><FontAwesomeIcon style={{margin:'20px'}} icon={faYoutube} /></a>

                     <a style={{color:'white'}} href="https://www.google.com"><FontAwesomeIcon style={{margin:'20px'}} icon={faGoogle} /></a>
                     </div>
                    
                     
        </div>
    );
};

export default FootballEssy;