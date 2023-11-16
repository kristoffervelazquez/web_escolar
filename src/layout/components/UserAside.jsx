import React, { useEffect } from 'react'
import "../../CSS/UserAside.css"
import { useParams } from 'react-router-dom';
import subjectsJson from "../../assets/db/subjects.json"

const UserAside = () => {
  const subjects = subjectsJson;
  const { id } = useParams();

  const user = {
    name: 'Estudiante',
    lastName: 'Ejemplo',
    expedient: '123456',
    gpa: '9.5',
    type: 'student',
    subjects: [1, 2, 3, 4],
    img: 'https://i.ibb.co/4pFCM21/twisted.gif'
  }

  const teacher = {
    name: 'Docente',
    lastName: 'Ejemplo',
    expedient: 'PROFUES123',
    type: 'teacher',
    subjects: [1],
    img: 'https://yt3.googleusercontent.com/ytc/APkrFKZ2QoVMy2NZdK5ZAvOtQnLY8sjICPxCNSWhjPST=s900-c-k-c0x00ffffff-no-rj'
  }

  useEffect(() => {
  }, [id])
  return (
    <aside className="news">
      <header className="channels-header focusable">
        <h3 role="header" className="channels-header-name">{id ? 'Docente' : 'Alumno'}</h3>
      </header>
      {
        id ?
          <section className='news-img-container'>
            <img className='avatar' src={teacher.img} alt="123" />
            <div className='teacher-info'>
              <h3>{teacher.name} {teacher.lastName}</h3>
              <p>{teacher.expedient}</p>
              <p>{teacher.expedient}@ues.mx</p>
            </div>
          </section>
          :
          <section className='news-img-container'>
            <img className='avatar' src={user.img} alt="123" />
            <div className='teacher-info'>
              <h3>{user.name} {user.lastName}</h3>
              <p>{user.expedient}</p>
              <p>{user.expedient}@ues.mx</p>
              <p>Promedio: {user.gpa}</p>
            </div>
          </section>
      }


      {/* // <header className="channels-list-header focusable">

        //   <section className='news-img-container'>

        //     <img className='news-img' src="https://www.ues.mx/archivos/imagenestop/backConocenos.jpg?28/10/2023%2004:58:01%20p.%20m." alt="Logo de la UES" width={200} height={100} />
        //     <img className='news-img' src="https://e66bhqmoxft.exactdn.com/wp-content/uploads/2023/01/nota-Administracion-de-Empresas-Contaduria-Gestion-y-Desarrollo-de-Negocios-y-la-Ingenieria-en-Software-estan-disponibles.jpg" alt="Estudiar una carrera" width={200} height={100} />
        //     <img className='news-img' src="https://pbs.twimg.com/profile_images/1709226256158408707/TXvFGF56_400x400.jpg" alt="Aniversario UES" width={200} height={100} />
        //     <img className='news-img' src="https://tvpacifico.mx/admin/images/noticias/280353-175865.jpeg" alt="Laboratorio UES" width={200} height={100} />
        //   </section>

        // </header> */}


    </aside>
  )
}

export default UserAside