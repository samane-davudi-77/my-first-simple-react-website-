import {Button} from  './Button'
import React from 'react';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4'


const HeroSection = () => {
    return ( 
        <div className="hero-container">
            <h1>به بلاگ من خوش آمدید </h1>
            <h4>اطلاعات روز دنیا</h4>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large" >
                    ادامه
                </Button>
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large" >
                    شروع<i className="fas fa-play-circle" />
                </Button>
            </div>
        </div>
     );
}
 
export default HeroSection;