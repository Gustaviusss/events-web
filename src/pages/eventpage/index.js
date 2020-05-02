import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

export default function EventPage(){
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