import React, { Component } from 'react'
import './WebPage.css'
import "@fortawesome/fontawesome-free/css/all.css"
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/imgIcon.png'

class WebPage extends Component {
    render() {
        return (
            <div className="webpage">

                {/* HEADER */}
                <div className="header">
                    <h1>Courses</h1>
                    <div>Search Bar</div>
                </div>

                {/* LOGO */}
                <div className="logo">
                    <div>
                        {/* <i className="fas fa-border-none fa-3x"
                            style={{ color: 'magenta' }}>
                        </i> */}
                        <img src={img4} alt="icon" />

                    </div>
                    <div>
                        <h2> memo</h2>
                    </div>
                </div>

                {/* TABS */}
                <div className="tabs">
                    <h3>All</h3>
                    <h3><span style={{ color: 'black' }}>Current</span></h3>
                    <h3>Pending</h3>
                    <h3>Completed</h3>
                </div>

                {/* SIDEMENU */}
                <div className="side-menu">
                    <h3 style={{ color: 'black' }}>Courses</h3>
                    <h3>Payment</h3>
                    <h3>Chat</h3>
                    <h3>Groups</h3>
                    <h3>Students</h3>
                    <h3>Support</h3>
                </div>

                {/* ACCOUNT */}
                <div className="account">
                    <h3><i class="far fa-user"></i> Account</h3>

                    <div>
                        <h3><i class="fas fa-cog"></i> Setting</h3>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="content">
                    <div className="content-column">
                        <div className="row-one">
                            <div style={{ width: '80%' }}>
                                <h1>May</h1>
                            </div>
                        </div>
                        <div className="row-two">
                            <div style={{ width: '80%' }}>
                                <h3>Visual Elements of User Interface Design</h3>
                                <p>Design</p>
                            </div>
                        </div>
                        <div className="row-three">
                            <div style={{ width: '80%' }}>
                                <p><span>May 17, 2020</span></p>
                                <img src={img1} alt="left" style={{ width: '100%', height: 'auto' }} />
                                <p>The UI/UX Design Specialization brings a design-centric approach to us...
                                 <span>more</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="row-one">
                            <div style={{ width: '80%' }}>
                                <h1>Aug</h1>
                            </div>
                        </div>
                        <div className="row-two">
                            <div style={{ width: '80%' }}>
                                <h3>Object Oriented Programming in Java</h3>
                                <p>Programming</p>
                            </div>
                        </div>
                        <div className="row-three">
                            <div style={{ width: '80%' }}>
                                <p><span>August 19, 2020</span></p>
                                <img src={img2} alt="middle" style={{ width: '100%', height: 'auto' }} />
                                <p>The UI/UX Design Specialization brings a design-centric approach to us...
                                <span>more</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="row-one">
                            <div style={{ width: '80%' }}>
                                <h1>Oct</h1>
                            </div>
                        </div>
                        <div className="row-two">
                            <div style={{ width: '80%' }}>
                                <h3>The Strategy of Content Marketing</h3>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="row-three">
                            <div style={{ width: '80%' }}>
                                <p><span>October 09, 2020</span></p>
                                <img src={img3} alt="right" style={{ width: '100%', height: 'auto' }} />
                                <p>The UI/UX Design Specialization brings a design-centric approach to us...
                                <span>more</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WebPage;