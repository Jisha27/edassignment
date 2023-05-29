import React from 'react';
import css from "./Content.module.css"
import {FaRupeeSign} from "react-icons/fa"
import book from "../../Assets/Group 20.png"
import clock from "../../Assets/Group 19.png"
import live from "../../Assets/Group 16.png"
import hat from "../../Assets/Group 17.png" 
import ads from "../../Assets/Group 15.png" 


const Content = () => {

    
    return (
        <div className={css.container}>
            
        
                <h1 className={css.header}>Access curated courses worth <span className={css.strikethru}><span><FaRupeeSign/>
                18500</span></span> at just <span className={css.headerblue}><FaRupeeSign/>99</span> per year!</h1>
                <div ><img src={book} style={{height:'68px',width:'68px'}} alt="" />  <div className={css.one}> <span> 100+</span>  Job relevant courses</div></div>
                <div ><img src={clock} style={{height:'68px',width:'68px'}} alt="" /><div className={css.two}><span>20,000+</span>   Hours of content</div></div>
                <div ><img src={live} style={{height:'68px',width:'68px'}} alt="" /><div className={css.three}><span>Exclusive</span>  webinar access</div></div>
                <div ><img src={hat} style={{height:'68px',width:'68px'}} alt="" /><div className={css.four}>Sponsorship worth  <span><FaRupeeSign color='#0096FF'/>94,500</span></div></div>
                <div ><img src={ads} style={{height:'60px',width:'60px'}} alt="" /><div className={css.five}><span>Ad</span>  free learning experience</div></div>
            
            
        </div>
    );
}

export default Content;
