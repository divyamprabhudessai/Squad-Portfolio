import React from "react";
import './Home.css'

export default function Home() {


    return (
        <>
            <div className="main">
                <nav>
                    <div className="nav-cont">
                        <div className="nav-content" id="logo-cont"> <img src="https://img.hotimg.com/logo7506d83569140886.png" alt="" id="logo" />Squad-55</div>
                        <div className="nav-content"><a href="">About</a></div>
                        <div className="nav-content"><a href="">Stats</a></div>
                        <div className="nav-content"><a href="">Members</a></div>
                    </div>

                </nav>
                <img src="https://img.hotimg.com/Vector-14684ed9b37a8ef95.png" alt="" id="star-1" />
                <img src="https://img.hotimg.com/Vector-14684ed9b37a8ef95.png" alt="" id="star-2" />

                <div className="hero">
                    <div className="hero-content">
                        <div><img src="https://img.hotimg.com/smiley.png" alt="" id="smiley" /></div>
                        <div id="title"><h1>Squad-55 <br />MIT-ADT <span id="highlight">PUNE</span> </h1></div>
                        <div><button id="members-button">See Members</button></div>
                    </div>
                    <div></div>
                </div>

                <img src="https://img.hotimg.com/Vector-14684ed9b37a8ef95.png" alt="" id="star-2" />
                <div className="road">
                    <div className="strip-container">
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>

                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                        <div className="strip"></div>
                    </div>
                  
                </div>





            </div>
        </>
    )
};