import React from "react";
import './Home.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
    const images = [
        "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
        "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
        "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
        "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg"
    ];

    return (
        <>
            <div className="main">
                <nav>
                    <div className="nav-cont">
                        <div className="nav-content" id="logo-cont"> 
                            <img src="https://img.hotimg.com/logo7506d83569140886.png" alt="" id="logo" />Squad-55
                        </div>
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
                    <div>
                        <div className="card" id="squad-photo">
                            <div className="box">
                                <Carousel useKeyboardArrows={true}>
                                    {images.map((URL, index) => (
                                        <div key={index} className="slide">
                                            <img alt="sample_file" src={URL} />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="https://img.hotimg.com/Vector-14684ed9b37a8ef95.png" alt="" id="star-2" />
                
                <div className="road">
                    <div className="strip-container">
                        {/* Road Strips */}
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

                <div className="content-section">
                    <div>
                        <h2 id="statistics-title">Squad-statistics</h2>
                    </div>
                    <div className="grid-container">
                        <div className="grid-item item1">
                            <div className="item1-content"> <span className="span"><h2>16 </h2> Members</span></div>
                            <div >
                                <h2>30k +   </h2>
                                Hours worked
                            </div>
                        </div>
                        <div className="grid-item item2"></div>
                        <div className="grid-item item3">hello</div>
                    </div>
                </div>

                <h1 id="squad-members-title">Squad-Members</h1>
                <div className="squad-members-section">
                    {/* Card Sections */}
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="card">
                            <div className="image-container">
                                <img src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>Member-{index + 1}</h3>
                                <p>UI design - User research - <br /> Webflow develop</p>
                            </div>
                            <div className="arrow">
                                <button id="arrow-btn">
                                    <span id="act-arrow"> &#8599;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="connect">
                    <h2>Let's connect</h2>
                    <p>Want to connect and know more about us?</p>
                    <button>Send us a message</button>
                </div>

                <footer>
                    <div className="foot-cont">
                        <div className="bot-logo">
                            <img src="https://img.hotimg.com/logo7506d83569140886.png" alt="" id="logo" />
                            <p>55</p>
                        </div>
                        <p>Portfolio 2024</p>
                        <div className="social">
                            <img src="https://img.hotimg.com/icon-park-outline_dribble.png" alt="" />
                            <img src="https://img.hotimg.com/ri_instagram-line.png" alt="" />
                            <img src="https://img.hotimg.com/akar-icons_x-fill.png" alt="" />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}