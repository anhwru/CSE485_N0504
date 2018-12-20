import React, {Component} from 'react';
import  axios from 'axios';
import {

    Link,

} from 'react-router-dom'
class Menu extends Component {
        render() {
            return (
                <nav className="main-nav-outer" id="test" data-aos="fade-up">
                    <ul className="main-nav">
                        <li><a href="/">Home</a></li>
                        <li><Link to="/seo">Seo</Link></li>
                        <li><Link to="/hosting">Hosting</Link></li>
                        <li className="small-logo"><a><img src="../img/react2.png" alt="logo"/></a></li>
                        <li><Link to="/interface">Interface</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/client">Client</Link></li>
                    </ul>
                    <a className="mylogo"/>
                    <a className="res-nav_click"><i className="fa fa-bars"/></a>
                </nav>

            )
        }
    }


export default Menu;