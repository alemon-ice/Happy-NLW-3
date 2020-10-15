import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../../styles/components/pages/landing.css';

import logoImg from '../../images/Logo.svg';

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve a felicidadede para o mundo</h1>
          <p>Visite orfanatos e asilos e mude o dia de muitas crianças e idosos.</p>
        </main>

        <div className="location">
          <strong>Boituva</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight color="#ebe8da" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
