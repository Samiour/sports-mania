import React, { useState } from 'react';
import { useParams} from 'react-router';
import fakedata from '../../fakeData/MOCK_DATA.json';
import maleImage from '../../images/Rectangle 28.png';
import femaleImage from '../../images/female.png';
import '../LeagueDetail/LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin,faFlag,faFutbol,faVenusMars,faFacebook,faTwitterSquare,faYoutube} from '@fortawesome/free-solid-svg-icons'
import FootballEssy from '../FootballEssy/FootballEssy';


const LeagueDetail = () => {
    const {serial}=useParams();
    
    const [leagues,setLeagues]=useState(fakedata);
//    console.log(leagues);
   for(let i=0;i<leagues.length;i++){
    // console.log(leagues[i].id);
    if(serial==leagues[i].id){
        setLeagues(leagues[i]);
       
    }
   
 }
// console.log(leagues);
let image;
if(leagues.gender=='Male'){
     image=maleImage;
}
else if(leagues.gender=='Female'){
     image=femaleImage;
}

const leagueDetailHeader={
    
    height:'350px',
    width:'400px',
    paddingLeft:'27%',
   marginBottom:'30px'
}
const darkBlueSection={
   display:'flex',
   color:'white',
   padding:'100px',
   background:'darkBlue',
   height:'200px', 
   borderRadius:'10px',
   marginTop:'5%',
   marginLeft:'5%',
   marginRight:'5%'
    
}
    
    return (
        <div>
            <div style={leagueDetailHeader}>
            <img style={leagueDetailHeader} src={leagues.image} alt="" />
            </div>

            <div style={{background:'royalBlue',paddingTop:'1px'}}>
            <div style={darkBlueSection}>
                
                <div style={{paddingLeft:'200px'}}>
                <h2>{leagues.title}</h2>
                    <p><FontAwesomeIcon icon={faMapPin} />  Founded: {leagues.founded}</p>
                    <p><FontAwesomeIcon icon={faFlag} />  Country: {leagues.country}</p>
                    <p><FontAwesomeIcon icon={faFutbol} />  Sport-Type: {leagues.sportsType}</p>
                    <p><FontAwesomeIcon icon={faVenusMars} />  Gender: {leagues.gender}</p>
                </div>

                <div>
                  
                          <img style={{height:'100%',paddingLeft:'40%'}} src={image} alt="" />
                    
                    
                </div>
                

            </div>
            <FootballEssy></FootballEssy>
            
            </div>

            
         
    
        </div>
    );
};

export default LeagueDetail;