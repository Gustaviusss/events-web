import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';
import {Link} from 'react-router-dom'
import './styles.css'
require('./ably');

export default function EventPage(){
    ReactDOM.render(<App />, document.getElementById('root'));
    return(
        <div>
            <h1>Pagina principal da aplicação, onde o evento tá ocorrendo</h1>
            
            <Link to='/'>
                <button>Sair do evento</button>
            </Link>
            <Link to='/userpanel'>
                <button>Perfil do usuario</button>
            </Link>
        </div>
    )
}