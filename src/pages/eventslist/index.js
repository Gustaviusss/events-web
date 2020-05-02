import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

export default function EventList(){
    return(
        <div>
            <h1>Lista de eventos</h1>

            <Link to='/eventdetail'>
                <button>Info Do Evento</button>
            </Link>
            
        </div>
    )
}