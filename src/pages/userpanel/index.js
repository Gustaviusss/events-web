import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

export default function UserPanel(){
    return(
        <div>
            <h1>Painel do usuario</h1>
            <Link to='eventpage'>
                <button>Voltar</button>
            </Link>
        </div>
    )
}