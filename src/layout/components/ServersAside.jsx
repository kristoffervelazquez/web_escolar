import React from 'react'
import subjectsJson from "../../assets/db/subjects.json"
import Subjects from './SubjectSelector';
import { useNavigate } from 'react-router-dom';
import"../../CSS/ServersAside.css"


const ServersAside = () => {
  const subjectInfo = subjectsJson;
  const navigate = useNavigate();
  

  const handleClickHome = () => {
    navigate(`/app`);
  }
  const handleClicklogOut = () => {
    const shouldLogOut = window.confirm("¿Estás seguro de que deseas cerrar sesión?");

    if (shouldLogOut) {
      localStorage.removeItem("user");
      navigate('/');
      }
    }
  return (
    <aside className="servers">
      


      <div
        className="home"
        onClick={handleClickHome}
      ></div>

      <div className="subjects">
      <Subjects subjects={subjectInfo}/>
      <div
        className="exit"
        onClick={handleClicklogOut}
      ></div>
      </div>
    
    </aside>
  )
}

export default ServersAside