import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <main>
            <div className="mainCard">
                <img src="images/home.png" alt="Food" style={{ width: '100%', height: 'auto', filter: 'brightness(50%)' }} height="50" />
                <div className="title-card text-centered">
                    BAEGOPA
                    <Link to="/menu/appetizers" className="nav-link">
                        <button className="btn default menu-button">
                            MENU
                        </button>
                    </Link>

                </div>
            </div>
            <div className="TOS">
                <div className="side-by-side" style={{ width: '100%' }}>
                    <div className="BigLetters" style={{ width: '35%', height: 'auto', float: 'left' }}>
                        <p className="All_You" style={{ textAlign: 'center' }}>
                            A L L
                        </p>
                        <p className="All_You" style={{ textAlign: 'center' }}>
                            Y O U
                        </p>
                        <p className="All_You" style={{ textAlign: 'center' }}>
                            C A N
                        </p>
                        <p className="All_You" style={{ textAlign: 'center' }}>
                            E A T
                        </p>
                    </div>
                    <div style={{ flexShrink: 2 }} className="TOS_Box">
                        <p>
                            There will be a 1% surcharge applied to the order to cover technology and processing fees. Please note that the surcharge is not for service and is not distributed to the service staff.
                        </p>
                        <p>
                            Due to the frequent incidents..
                            tables who order the all you can eat option, every single guest
                            will be charged for the all you can eat price (no exceptions).
                        </p>

                        <p>
                            AYCE CUSTOMERS : Please let our staff know you would like rice.
                        </p>

                        <p>
                            Please read more here for more information:
                        </p>
                        <div>
                            <div className="text-center" style={{ fontSize: '100px' }}>
                                <p className="text-border">
                                    <button className="btn default">
                                        <a className="nav-link" href="TOS.html">TERMS OF SERVICE</a>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-links">
                <div className="side-by-side-pics" style={{ width: '100%', height: '400px' }}>
                    <div className="AYCE-menu image-captioned">
                        <div>
                            <a className="nav-link-home-drink" href="Drinks.html">DRINKS</a>
                        </div>
                        <img src="images/drink.png" alt="drink" />
                    </div>
                    <div className="AYCE-menu image-captioned">
                        <div>
                            <a className="nav-link-home-drink" href="All_You_Can_Eat.html"
                                style={{ textAlign: 'center' }}>KOREAN BBQ AYCE</a>
                        </div>
                        <img src="images/food.jpeg" alt="food" />
                    </div>
                </div>
            </div>
        </main>
    );
}