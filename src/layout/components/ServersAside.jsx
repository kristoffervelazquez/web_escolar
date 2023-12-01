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
      <img src="https://us.123rf.com/450wm/ahasoft2000/ahasoft20001507/ahasoft2000150700705/42497596-inicio-icono-desde-primitivos-redondos-overcolor-set-este-bot%C3%B3n-redondo-y-plano-se-dibuja-con-los.jpg" onClick={handleClickHome}></img>
      </div>

      <div className="subjects">
      <Subjects subjects={subjectInfo}/>
      <img src='https://static.vecteezy.com/system/resources/previews/026/337/285/non_2x/logout-icon-exit-in-trendy-flat-style-flat-web-mobile-icon-sign-symbol-button-element-illustration-isolated-on-white-background-vector.jpg' onClick={handleClicklogOut}></img>
      </div>
    
    </aside>
  )
}

export default ServersAside