import React from 'react';
import { Button,Card } from 'react-bootstrap';
import '../LeagueCard/league-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faFacebookF } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
  
  library.add(
    
    faGoogle,
    faFacebook,
    faTwitter
  );



const LeagueCard = (props) => {
    const{title,image,sportsType,id}=props.league;
    let history = useHistory();

    const handleExploreClick=(serial)=>{
        history.push(`/league/${serial}`);
    }
    return (
        <div>
            
             <Card className="league-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title><h2>{title}</h2></Card.Title>
                        <Card.Text>
                        <p>sports-type: {sportsType}</p>

                        </Card.Text>
                        <Button onClick={()=>handleExploreClick(id)} variant="primary"> Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default LeagueCard;