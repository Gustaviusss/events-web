import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
import Elipse from '../../assets/Elipse.png'
import Logo from '../../assets/logo.svg'
import Green from '../../assets/elipsegreen.png'
import {FiSearch, FiGlobe,FiInstagram,FiFacebook} from 'react-icons/fi'

export default function EventList(){
    return(
        <div className="eventlist">
            <header>
                <img src={Logo} alt='logo' />

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
                    <strong>Howl</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Networking
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
                    <strong>MegaHack</strong>
                    <Link to='/eventdetail'>
                        <div className="buttonred">
                            <span className='tiny-button'>
                                    Entrar
                                    <img src={Green} alt='green' />
                            </span>
                        </div>
                    </Link>
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
                    <strong>HackaGr1d</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Networking
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
                    <strong>AgroHacka</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Networking
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
                    <strong>BrasaHacka</strong>
                    <div className="buttonlight">
                        <button  className='tiny-gray-button'>
                                Networking
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
                    <strong>MegaHack 3.0</strong>
                        <div className="buttonred">
                            <span className='tiny-button'>
                                    Inscrever-se
                            </span>
                        </div>
                </li>

            </ul>
        </div>

    )
}