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
    <div class="carrusel aparicion-animada">
      <div className="carrusel">
        <div className="grande">
          <img src="https://www.ues.mx/archivos/banners/0202311230957782.jpg?30/11/2023%2008:12:43%20p.%20m." alt="imagen 1" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202311081437892.jpeg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 2" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202311061143994.jpg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 3" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202310271303104.jpg?13/11/2023%2004:35:29%20a.%20m." alt="imagen 4" className="img" />
          <img src="https://www.ues.mx/archivos/banners/0202310271417297.jpg?13/11/2023%2005:05:07%20a.%20m." alt="imagen 5" className="img" />
        </div>

        <ul className="puntos">
          <p className="punto activo"></p>
          <p className="punto"></p>
          <p className="punto"></p>
        </ul>
      </div>
    </div>
    <div className="Novedades">
        <div>
          <h1>NOVEDADES</h1>
        </div>
      <div class="informacion-1">
          <img src="https://i.ibb.co/fv4XH6K/6384394.jpg" alt="Plantel UES Hermosillo" class="imagen-1"/>
        <div class="textoInformativo-1">
          <h2>Se parte de nuestro equipo</h2>
          <br/>
          <p>La Universidad Estatal de Sonora convoca a profesionistas interesados en desarrollar actividades académicas en educación superior, a participar en el concurso de evaluación curricular a realizarse en las cinco Unidades Académicas y la Extensión Miguel Alemán. Consulta las bases descargando la convocatoria de la Unidad Académica de tu interés.</p>
        </div>
      </div>
      <div class="informacion-2">
        <div class="textoInformativo-2">
          <h2>Conviértete en Berrendo</h2>
          <br/>
          <p>En esta institución, no solo obtendrán conocimientos, sino que también se convertirán en arquitectos de su propio éxito. Les espera un viaje educativo lleno de desafíos, oportunidades y descubrimientos. ¡Atrévanse a soñar en grande y a ser parte de una comunidad que impulsa el progreso y la innovación! Su camino hacia el futuro comienza aquí. ¡Adelante, aspirantes!</p>
        </div>
        <img src="https://i.ibb.co/M2wvd26/berrendo.jpg" alt="Plantel UES Hermosillo" class="imagen-2"/>
      </div>
    </div>
  </div>

    
  );
}

export default LandingPage;