import React, { Component } from "react";
import logo from '../images/logo-branco.png'; // Tell webpack this JS file uses this image
import './styles.css'

class NavBar extends Component {
    render() {
        return (
            <nav className="white">
                <div className="nav-wrapper">
                    <span classname="img">
                        <img src={logo} width="100" alt="Logo" />
                    </span>
                    
                    <span className="brand-logo center black-text"> Evento Mega Hack</span>
                    
                    <ul className="right-hide-on-med-and-down ">
                        <li><span className="black-text">Olá, Liara</span></li>
                        <li><a className="red-text" href="/config"><i className="material-icons">settings</i></a></li>
                        <li><a className="red-text" href="/profile"><i className="material-icons">exit_to_app</i></a></li>
                    
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;