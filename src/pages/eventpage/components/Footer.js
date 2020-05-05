import React, { Component } from 'react';
import Patrocinio from '../images/patrocinio.png'; // Tell webpack this JS file uses this image

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col s12 m3 l4">
                            <h5 className="black-text"><strong>Informações</strong></h5>
                            <p class="black-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div class="col offset-l2 s12 m3 l3 ">
                            <h5 className="black-text"><strong>Palestrantes</strong></h5>

                            <table className="black-text">
                                <tbody>
                                    <tr>
                                        <td className="palestrante">
                                            <h6> Alvin</h6>
                                            <h6 className="grey-text text-darken-2"> Desenvolverdor</h6>
                                            <i class="material-icons grey-text text-darken-1">person_add</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="palestrante">
                                            <h6> Alan</h6>
                                            <h6 className="grey-text text-darken-2"> Desenvolverdor</h6>
                                            <i class="material-icons grey-text text-darken-1">person_add</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="palestrante">
                                            <h6> Joyce</h6>
                                            <h6 className="grey-text text-darken-2"> Desenvolverdor</h6>
                                            <i class="material-icons grey-text text-darken-1">person_add</i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div class="col s12 m6 l3">
                            <div class="card">
                                <h5 className="red-text center"><strong>Patrocinadores</strong></h5>
                                <div class="card-image">
                                    <img src={Patrocinio} alt="Patrocinio" />
                                </div>

                                <div class="card-content">
                                </div>
                                <div class="card-action">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;