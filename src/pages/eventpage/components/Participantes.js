import React, { Component } from 'react';

class Participantes extends Component {
    render() {
        return (
            <table className="black-text">
                <h4><strong>Participantes </strong></h4> <h5><i className="material-icons red-text small">group</i> 100</h5> 
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
        );
    }
}

export default Participantes;