import React from 'react'
import subjectsJson from "./pages/Subjects.json"
import Subjects from './pages/SubjectSelector';


const ServersAside = () => {
  const subjectInfo = subjectsJson;
  console.log(subjectInfo);
  return (
    <aside className="servers">
      <div className="home">
        <button>
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