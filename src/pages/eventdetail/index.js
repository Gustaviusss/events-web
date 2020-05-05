import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiSettings, FiGlobe, FiInstagram, FiFacebook, FiUserPlus } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import megaImg from '../../assets/mega.svg';
import patroc1Img from '../../assets/patroc1.png';
import patroc2Img from '../../assets/patroc2.png';
import patroc3Img from '../../assets/patroc3.png';
import patroc4Img from '../../assets/patroc4.png';
import mhImg from '../../assets/mh.png';

export default function EventDetail(){
    return(
        <body>
            <header className="header">

                <div className="menu">
                        
                    <div className="logo">
                        <img src={logoImg} alt='Logo'/>
                    </div>

                    <div className="mega">
                        <img src={megaImg} alt='Mega'/> 
                    </div>
                        
                    <div className="titulo">
                        <p>MegaHack</p>
                    </div>

                    <div className="botoes">
                        <div className="user">
                            <p>Olá,<b>Rutiely Miranda</b></p>
                            <span>Desenvolvedor</span>
                        </div>
                            {/* colocar a rota */}
                        <a href="/"> 
                            <FiSettings size={20} color="#E02041"/>                
                        </a>

                        <b href="/">
                            <FiLogIn size={20} color="#E02041"/>                
                        </b>
                    </div>
                </div>

            </header>

            <hr/>

            <div className="content">
                <div className="patrocinadores">
                    <div className="img">
                        <img src={mhImg} alt='MH'/>
                    </div>

                    <div className="patro">
                        <div>
                            Patrocinadores
                        </div>

                        <div className="patroc">
                            <img src={patroc1Img} alt='patroc1'/>
                            <img src={patroc2Img} alt='patroc2'/>
                            <img src={patroc3Img} alt='patroc3'/>
                            <img src={patroc4Img} alt='patroc4'/>
                        </div>
                    </div>

                </div>
                <div className="info">
                    <div className="botao">
                        <Link className="button1" to='/eventpage'>ENTRAR</Link>

                        <Link className="button2" to='/'>LEMBRAR</Link>
                    </div>

                    <h1>Informações</h1>

                    <p>O maior hackathon on-line do Brasil não poderia carregar outro nome, senão: 
                        MEGA!</p>
                    
                    <p>Grande não apenas por quebrar barreiras geográficas, mas também pela
                        dimensão da jornada que proporciona aos seus participantes. O Mega Hack é 
                        o Monte Everest dos hackathons, e é preciso preparo para chegar ao topo. </p>

                    <p>Então, prepare-se!</p>

                    <div className="icones">
                            {/* colocar a rota */}
                        <a href=""> 
                            <FiGlobe size={30} color="#A8A8B3"/>                
                        </a>
                            {/* colocar a rota */}
                        <a href=""> 
                            <FiInstagram size={30} color="#A8A8B3"/>                
                        </a>
                            {/* colocar a rota */}
                        <a href=""> 
                            <FiFacebook size={30} color="#A8A8B3"/>                
                        </a>

                        <b>Palestrantes</b>
                    </div>

                    <div className="palestrante-lista">
                       
                        <div className="palestrante">
                            <div>
                                <b>Rutiely Miranda</b>
                                <span>Desenvolvedor | Imperatriz - MA</span>
                            </div>
                            <div>
                                    {/* colocar a rota */}
                                <a href=""> 
                                    <FiUserPlus size={16} color="#A8A8B3"/>                
                                </a>
                            </div>

                        </div>

                        <div className="palestrante">
                            <div>
                                <b>Rutiely Miranda</b>
                                <span>Desenvolvedor | Imperatriz - MA</span>
                            </div>
                            <div>
                                    {/* colocar a rota */}
                                <a href=""> 
                                    <FiUserPlus size={16} color="#A8A8B3"/>                
                                </a>
                            </div>

                        </div>

                        <div className="palestrante">
                            <div>
                                <b>Rutiely Miranda</b>
                                <span>Desenvolvedor | Imperatriz - MA</span>
                            </div>
                            <div>
                                    {/* colocar a rota */}
                                <a href=""> 
                                    <FiUserPlus size={16} color="#A8A8B3"/>                
                                </a>
                            </div>

                        </div>

                        <div className="palestrante">
                            <div>
                                <b>Rutiely Miranda</b>
                                <span>Desenvolvedor | Imperatriz - MA</span>
                            </div>
                            <div>
                                    {/* colocar a rota */}
                                <a href=""> 
                                    <FiUserPlus size={16} color="#A8A8B3"/>                
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </body>


    )
}
