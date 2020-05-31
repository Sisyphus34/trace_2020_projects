import React, { Component } from 'react'
import './WebPage.css'
import "@fortawesome/fontawesome-free/css/all.css"
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

class WebPage extends Component {
    render() {
        return (
            <div className="webpage">
                <div className="header">
                    <h1>Courses</h1>
                    <div>Search Bar</div>
                </div>


                <div className="logo">
                    <div>
                        <i className="fas fa-border-none fa-2x"></i><h2> memo</h2>
                    </div>
                </div>


                <div className="tabs">
                    <h3>All</h3>
                    <h3>Current</h3>
                    <h3>Pending</h3>
                    <h3>Completed</h3>
                </div>


                <div className="side-menu">
                    <h3 style={{ color: 'black' }}>Courses</h3>
                    <h3>Payment</h3>
                    <h3>Chat</h3>
                    <h3>Groups</h3>
                    <h3>Students</h3>
                    <h3>Support</h3>
                </div>


                <div className="account">
                    <div>Account</div>
                    <div>Setting</div>
                </div>


                <div className="content">
                    <div className="content-column">
                        <div className="row-one"><h1>May</h1></div>
                        <div className="row-two">
                            <h3>Visual Elements of User Interface Design</h3>
                            <p>Design</p>
                        </div>
                        <div className="row-three">
                            <p className="date">May 17, 2020</p>
                            <img src={img1} alt="left" />
                            <p>The UI/UX Design Specialization brings a design-centric approach to us...
                        <span>more</span>
                            </p>
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="row-one"><h1>Aug</h1></div>
                        <div className="row-two">
                            <h3>Object Oriented Programming in Java</h3>
                            <p>Programming</p>
                        </div>
                        <div className="row-three">
                            <p className="date">August 19, 2020</p>
                            <img src={img2} alt="middle" />
                            <p>The UI/UX Design Specialization brings a design-centric approach to us...
                        <span>more</span>
                            </p>
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="row-one"><h1>Oct</h1></div>
                        <div className="row-two">
                            <h3>The Strategy of Content Marketing</h3>
                            <p>Marketing</p>
                        </div>
                        <div className="row-three">
                            <p className="date">October 09, 2020</p>
                            <img src={img3} alt="right" />
                            <p>The UI/UX Design Specialization brings a design-centric approach to us...
                        <span>more</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default WebPage;