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
        localStorage.removeItem("user");
        navigate('/');
      }
      
  return (
    <aside className="servers">
      
      <div className="home">
      <img src="https://cdn-icons-png.flaticon.com/512/5974/5974907.png" onClick={handleClickHome}></img>
      </div>
      
      <div className="subjects">
      <Subjects subjects={subjectInfo}/>
      <button className="logOut" onClick={handleClicklogOut}>
        Cerrar Sesion
      </button>
      </div>
    
    </aside>
  )
}

export default ServersAside