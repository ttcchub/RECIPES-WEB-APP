import React from 'react';
import heroVid from '../assets/video.mp4';
import '../styles/Home.css';

import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <main>
            <video className='video' autoPlay loop muted>
                <source src={heroVid} type='video/mp4' />
            </video>

            <div className='intro-container'>
                <span className='textCenter' > WORLD COLLECTION </span>
            </div>

            <div className='intro-container-2'>
                <Link className='cntr_button' to="/browserecipes"> RECEPIES </Link>
            </div>

            <div className='main-container'>
                <div className='home-card'>
                <h4>ALL RECIPES </h4>
                <p> Here you can find recipes and enjoy the cooking process by following them. </p>
                <Link to="/browserecipes"><small> 📋 Show Recipes</small></Link>
                </div>

                <div className='home-card'>
                <h4>ADD NEW IDEAS</h4>
                <p> You have a secret recipe for cooking your favorite dish, share it, everyone wants to eat delicious!</p>
                <Link to="/add"><small> ✏️ Add New </small></Link>
                </div>
                
                <div className='home-card'>
                <h4> REACT22S PROGRAM </h4>
                <p> Visit our college website for a clear understanding of where the roots come from. </p>
                <a href="http://bc.fi" target="_blank" rel="noreferrer"><small> 🧠 Business College Helsinki</small></a>    
                </div>

                </div>
        </main>
    );
};

export default Home;