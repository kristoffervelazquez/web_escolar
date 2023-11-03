import React from 'react'
import "../../CSS/NewsAside.css"

const NewsAside = () => {
  return (
    <aside className="news">
      <header className="channels-header focusable">
        <h3 role="header" className="channels-header-name"> Noticias </h3>
      </header>
      <header className="channels-list-header focusable">
        {/* <h3 role="header" className="channels-list-header-name"> #general </h3> */}
        <section className='news-img-container'>

        <img className='news-img' src="https://www.ues.mx/archivos/imagenestop/backConocenos.jpg?28/10/2023%2004:58:01%20p.%20m." alt="Logo de la UES" width={200} height={100}  />
        <img className='news-img' src="https://e66bhqmoxft.exactdn.com/wp-content/uploads/2023/01/nota-Administracion-de-Empresas-Contaduria-Gestion-y-Desarrollo-de-Negocios-y-la-Ingenieria-en-Software-estan-disponibles.jpg" alt="Estudiar una carrera" width={200} height={100}/>
        <img className='news-img' src="https://pbs.twimg.com/profile_images/1709226256158408707/TXvFGF56_400x400.jpg" alt="Aniversario UES" width={200} height={100}/>
        <img className='news-img' src="https://tvpacifico.mx/admin/images/noticias/280353-175865.jpeg" alt="Laboratorio UES" width={200} height={100}/>
        </section>

      </header>
    </aside>
  )
}

export default NewsAside