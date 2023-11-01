import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import subjectsJson from "../../assets/db/subjects.json"

const ChannelsList = () => {
  const params = useParams();
  const navigate = useNavigate();

  // Si no hay id en los parámetros, no se muestra nada
  if (!params.id) {
    return null
  }

  // Si el id no existe en el json, no se muestra nada
  const activeSubject = subjectsJson.filter(materia => materia.id == params.id)[0].subjectName;
  
  const handleClickChannel = (item) => {
    switch (item) {
      case 'activities':
        return navigate(`/app/subject/${params.id}/activities`);
      case 'sequence':
        return navigate(`/app/subject/${params.id}/sequence`);
      case 'mail':
        return navigate(`/app/subject/${params.id}/mail`);
      case 'material':
        return navigate(`/app/subject/${params.id}/material`);
      default:
        return navigate(`/app/subject/${params.id}/activities`);
    }
  }


  return (
    <aside className="channels">
      <header className="channels-header focusable">
        <h3 role="header" className="channels-header-name">{activeSubject}</h3>
      </header>

      <section className="channels-list">
        <header onClick={() => handleClickChannel('activities')} className="channels-list-header focusable">
          <h5>Actividades</h5>
        </header>

        <header onClick={() => handleClickChannel('sequence')} className="channels-list-header focusable">
          <h5>Secuencia didactica</h5>
        </header>

        <header onClick={() => handleClickChannel('mail')} className="channels-list-header focusable">
          <h5>Correo</h5>
        </header>

        <header onClick={() => handleClickChannel('material')} className="channels-list-header focusable">
          <h5>Material didactico</h5>
        </header>
      </section>

    </aside>
  )
}

export default ChannelsList