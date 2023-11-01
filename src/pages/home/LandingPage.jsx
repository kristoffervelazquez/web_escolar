import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación
import './css/landing.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Bienvenido UES ESCOLAR</h1>
      <p>¡Accede con tu expediente y contraseña tu plataforma universitaria!</p>
      <Link to="auth/login">
        <button className="login-button">Iniciar Sesión</button>
      </Link>
    </div>
  );
}

export default LandingPage;
