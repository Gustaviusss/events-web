import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
import Elipse from '../../assets/Elipse.png'
import Green from '../../assets/elipsegreen.png'
import {FiSearch, FiGlobe,FiInstagram,FiFacebook} from 'react-icons/fi'

export default function EventList(){
    return(
        <div className="eventlist">
            <header>
                <img src={Elipse} alt='logo' />
                <span className='eventowner'><strong>Logo</strong>Evento</span>

                <div className="linkholder">
                    <span className='normal-link'>Home</span>
                    <span className='normal-link'>Contato</span>
                </div>
                

                <Link className="tiny-button" to='/'>Login</Link>
                <button className="tiny-gray-button" to='/'>Register</button>
            </header>


            <div className='textholder'>
               Houston, nós temos um evento...
            </div> 

            <div className='busca'>
                <button>
                <FiSearch size={29}/>
                </button>
                <input type="text" placeholder='Procurar Eventos'/>
            </div>

            <ul>
                <li>
                    <img src={Elipse} alt='logo' />
                    <div className="buttons">
                        <button type='button'>
                        <FiGlobe color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiInstagram color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiFacebook color="#A8A8B3"size={30}/>
                        </button>
                    </div>
                    <strong>Evento</strong>
                    <div className="buttonlight">
                        <Link to="/eventdetail"  className='tiny-gray-button'>
                                Entrar
                                <img src={Green} alt='green' />
                        </Link>
                    </div>
                </li>
                <li>
                    <img src={Elipse} alt='logo' />
                    <div className="buttons">
                        <button type='button'>
                        <FiGlobe color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiInstagram color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiFacebook color="#A8A8B3"size={30}/>
                        </button>
                    </div>
                    <strong>Evento</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Entrar
                                <img src={Green} alt='green' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src={Elipse} alt='logo' />
                    <div className="buttons">
                        <button type='button'>
                        <FiGlobe color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiInstagram color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiFacebook color="#A8A8B3"size={30}/>
                        </button>
                    </div>
                    <strong>Evento</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Entrar
                                <img src={Green} alt='green' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src={Elipse} alt='logo' />
                    <div className="buttons">
                        <button type='button'>
                        <FiGlobe color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiInstagram color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiFacebook color="#A8A8B3"size={30}/>
                        </button>
                    </div>
                    <strong>Evento</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Entrar
                                <img src={Green} alt='green' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src={Elipse} alt='logo' />
                    <div className="buttons">
                        <button type='button'>
                        <FiGlobe color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiInstagram color="#A8A8B3"size={30}/>
                        </button>
                        <button type='button'>
                        <FiFacebook color="#A8A8B3"size={30}/>
                        </button>
                    </div>
                    <strong>Evento</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Entrar
                                <img src={Green} alt='green' />
                        </button>
                    </div>
                </li>
            </ul>

            
            
        </div>

    )
}