import './Hero.css';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import play_icon from '../../assets/play_icon.png'; 
import pause_icon from '../../assets/pause_icon.png';
// import { useNavigate } from 'react-router-dom';


const Hero= ({setPlayStatus, playStatus, heroData, heroCount, setHeroCount}) =>{
    const[carbonEmissions, setCarbonEmissions]= useState(1000000);
    // const navigate= useNavigate();
   useEffect(() =>{
        const interval= setInterval(()=>{
            setCarbonEmissions((prev)=>prev+Math.floor(Math.random()*500));

        },3000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="hero-container">
         { <video className='hero-video' autoPlay={playStatus} loop muted= {!playStatus}>
                <source src="./video3.mp4" type='video/mp4'/> 
             </video>}
            
            <div className="hero-overlay">
                <div className="carbon-counter"> Global Emissions:<br></br>{carbonEmissions.toLocaleString()} Tons CO2</div>
                <h1 className="hero-text">{heroData.text1}</h1>
                <p className="hero-subtext">{heroData.text2}</p>
                
                <div className="cta-container">
                   <button className="cta-circle">
                    <FontAwesomeIcon icon={faCalculator} className="cta-icon" />
                    </button>
                    <span className="cta-text">Calculate Emissions</span>
                    </div>

                
                <div className="play-button"> 
                <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon: play_icon} alt=""/>
                <p>See the Video</p>
                </div>    
            </div>
        </div>
    )
}

export default Hero;