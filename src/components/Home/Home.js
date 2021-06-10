import React, { useEffect, useState } from 'react';
import headerImg from '../../images/football_field.jpg';
import '../Home/Home.css';
import { Button,Card,Container,Row,Col } from 'react-bootstrap';

import LeagueCard from '../LeagueCard/LeagueCard';
import fakedata from '../../fakeData/MOCK_DATA.json';

const Home = () => {
    const firstNine=fakedata.slice(0,9);
    const [leagues,setLeagues]=useState(firstNine);
  
   


    return (
        <div>
            
           <div className='homepage-headersection'>
           <img src={headerImg} alt="" />
           </div>

          

           <div className='homepage-bodysection'>
            
            
              {
             
                  leagues.map(league=><LeagueCard league={league}></LeagueCard>)
                  
              }
               
                  

                

            
           </div>
        </div>
    );
};

export default Home;