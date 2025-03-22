import './Background.css';
import video3 from '../../assets/video3.mp4';
import c2 from '../../assets/c2.jpg';
import loginbg from '../../assets/loginbg.jpg';
import e1 from '../../assets/e1.jpg';
// import { useEffect } from 'react';      

export const Background = ({playStatus, heroCount}) => { 
    if(playStatus){
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video3} type='video/mp4'/>
            </video>

 )
    }
    else if(heroCount===0){
        return <img src= {c2} className= 'background fade-in' alt= 'background'/>
    }
    else if(heroCount===1){
        return <img src= {loginbg} className= 'background fade-in' alt= 'background'/>
    }
    else if(heroCount===2){
        return <img src= {e1} className= 'background fade-in' alt= 'background'/>
    }
    
}

export default Background;