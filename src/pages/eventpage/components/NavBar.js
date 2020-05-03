import React, { Component } from "react";
import logo from '../images/logo-branco.png'; // Tell webpack this JS file uses this image

class NavBar extends Component {
    render() {
        return (
            <nav className="white">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo black-text"><i className="material-icons">home</i>Logo <img src={logo} width="100" alt="Logo" /></a>
                    <a href="#" className="brand-logo center black-text"> Evento Mega Hack</a>
                    <ul className="right hide-on-med-and-down ">
                        <li><a className="black-text" href="#">Olá, Liara</a></li>
                        <li><a className="red-text" href="#"><i className="material-icons">settings</i></a></li>
                        <li><a className="red-text" href="#"><i className="material-icons">exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;