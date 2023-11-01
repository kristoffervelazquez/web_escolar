import React from 'react'
import subjectsJson from "../../assets/db/subjects.json"
import Subjects from './SubjectSelector';
import { useNavigate } from 'react-router-dom';


const ServersAside = () => {
  const subjectInfo = subjectsJson;
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/app`);
  }
  return (
    <aside className="servers">
      <div className="home">
        <button onClick={handleClickHome}>
          Inicio
        </button>
      </div>

      <div className="subjects">
      <Subjects subjects={subjectInfo}/>
      </div>
    
    </aside>
  )
}

export default ServersAside