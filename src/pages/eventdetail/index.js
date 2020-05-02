import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

export default function EventDetail(){
    return(
        <div>
            <h1>Detalhes do evento</h1>
            <Link to='/eventpage'>
                <button>Participar</button>
            </Link>
            
            <Link to='/'>
            <button>Voltar</button>
            </Link>
            
        </div>
    )
}