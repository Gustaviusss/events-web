import React, { Component } from 'react';
import Patrocinio from '../images/patrocinio.png'; // Tell webpack this JS file uses this image

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer white">
                <div class="container">
                    <div class="row">
                        <div class="col s12 m3 l4">
                            <h5 class="black-text">Informações</h5>
                            <p class="black-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div class="col offset-l2 s12 m3 l3">
                            <table className="black-text">
                                <thead >
                                    <tr>
                                        <th><h5>Palestrantes</h5></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alvin <i class="tiny material-icons">person_add</i>
                                            <p className="grey-text text-darken-2"> Desenvolverdor</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alan <i class="tiny material-icons">person_add</i>
                                            <p className="grey-text text-darken-2"> Desenvolverdor</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan <i class="tiny material-icons">person_add</i>
                                            <p className="grey-text text-darken-2"> Desenvolverdor</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="col s12 m6 l3">
                            <div class="card">
                                <div class="card-image">
                                    <img src={Patrocinio} alt="Patrocinio" />
                                </div>
                                <div class="card-content">
                                </div>
                                <div class="card-action">
                                    <a className="red-text" href="#">Patrocinadores</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container black-text">
                        © 2020 Mega Hack
                        <a class="black-text text-lighten-4 right"
                            href="https://www.megahack.com.br/?fbclid=IwAR16RhW8kvBEC9ySNsr_6SdTKJrt4joAQ3cNS5WxC8-7I4bCGNd_jZhTrgE">
                            Hackathon Mega Hack</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;