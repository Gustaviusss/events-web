import React, { Component } from 'react';

class Participantes extends Component {
    render() {
        return (
            <table className="black-text">
                <thead>
                    <tr>
                        <th><h5>Participantes</h5></th>
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
        );
    }
}

export default Participantes;