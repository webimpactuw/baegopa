import React from 'react';

export default function Footer() {
    return (
        <div className="footer-general">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-8">
                            <div className="row">
                                <div className="column">
                                    <div className="title">
                                        <h1>CONNECT</h1>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="list-inline mt-4">
                                        <li className="list-inline-item button"><a
                                            href="https://www.instagram.com/baegopabbq/"
                                            target="_blank" title="instagram"><img
                                                src="./images/insta.png" width="50" alt="instagram logo"/></a></li>
                                        <li className="list-inline-item button" ><a
                                            href="https://www.facebook.com/Baegopa-112085353975813/"
                                            target="_blank" title="facebook"><img
                                                src="./images/fb.png" width="50" alt="facebook logo"/></a></li>
                                        <li className="list-inline-item button"><a
                                            href="https://www.yelp.com/biz/baegopa-seattle"
                                            target="_blank" title="yelp"><img
                                                src="./images/yelp.png" width="50" alt="yelp logo"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row reservation">
                                <div className="column">
                                    <div className="title reservation">
                                        <h1>RESERVATION</h1>
                                        <div className="line"></div>
                                    </div>
                                    <div className="reservation-text">
                                        <h5>Call <a href="tel:2064857137">(206) 485-7137</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row hours-chunk">
                                <div className="column">
                                    <div className="title hours">
                                        <h1>HOURS</h1>
                                        <div className="line"></div>
                                    </div>
                                    <div className="hours-text">
                                        <table>
                                            <tr>
                                                <td><h5 className="hours-head">FALL & WINTER HOURS:</h5></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Monday - Thursday</h5></td>
                                                <td><h5>12pm - 9pm</h5></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Friday & Saturday</h5></td>
                                                <td><h5>12pm - 10pm</h5></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Sunday</h5></td>
                                                <td><h5>12pm - 9:30pm</h5></td>
                                            </tr>
                                            <tr><td></td></tr>
                                            <tr>
                                                <td><h5 className="hours-head">SPRING & SUMMER HOURS:</h5></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Monday - Friday</h5></td>
                                                <td><h5>12pm - 10pm</h5></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Friday & Saturday</h5></td>
                                                <td><h5>12pm - 11pm</h5></td>
                                            </tr>
                                        </table>
                                        {/* <!-- <h5>FALL & WINTER HOURS:</h5>
                                        <h5>Monday to Thursday 12-9pm</h5>
                                        <h5>Friday & Saturday 12-10pm</h5>
                                        <h5>SPRING & SUMMER HOURS:</h5>
                                        <h5>Sunday to Thursday 12-9pm</h5>
                                        <h5>Friday & Saturday 12-10pm</h5> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="title">
                                <h1>LOCATION</h1>
                                <div className="line"></div>
                            </div>
                            <div className="location-chunk">
                                <div>
                                    <iframe
                                        title="location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.444832207718!2d-122.32612824819932!3d47.598039496459364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906bfd7ef7decf%3A0xe5426909fb236aaf!2sBaegopa!5e0!3m2!1sen!2sus!4v1653484176301!5m2!1sen!2sus"
                                        width="600" height="450" style={{ border: '0' }}
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <h5 id="address">509 7th Ave S, Seattle, WA 98104</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}