import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación
import './css/landing.css';



function LandingPage() {

  useEffect(() => {
    document.title = 'UES Escolar - Inicio';
    const grande = document.querySelector('.grande')
    const punto = document.querySelectorAll('.punto')

    punto.forEach((cadaPunto, i) => {
      punto[i].addEventListener('click', () => {

        let operacion = i * -20

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
          punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

      })
    })
  }, []);
  return (
    <div className="page">

      <Link to="auth/login">
        <button className="login-button">Iniciar Sesión</button>
      </Link>

      <div className="landing-page">
        <h1>BIENVENIDO</h1>
        <p>UES ESCOLAR</p>
      </div>

      <div className="carrusel">
        <div className="grande">
          <img src="https://www.ues.mx/archivos/banners/0202311071532002.jpg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 1" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202311081437892.jpeg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 2" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202311061143994.jpg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 3" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202310271303104.jpg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 4" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202310271417297.jpg?13/11/2023%2005:05:07%20a.%20m." alt="imagen 5" className="img" />
        </div>

        <ul className="puntos">
          <p className="punto"></p>
          <p className="punto"></p>
          <p className="punto activo"></p>
          <p className="punto"></p>
          <p className="punto"></p>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;