import { useState } from "react";
import "./css/LoginScreen.css";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const user = {
    name: ['Twisted', 'Machaca'],
    lastName: ['Gracia', 'Valenzuela'],
    expedient: ['123456', '78910'],
    gpa: ['8.5', '8.7'],
    type: ['Student', 'Student'],
    subjects: [[1, 2, 3, 4], [1, 2, 3, 4]],
    img: ['https://i.ibb.co/4pFCM21/twisted.gif', 'https://i.ibb.co/9v8Bv9C/imagen-2023-11-16-041407732.png']
};

  const teacher = {
    name: ['Patricia', 'Viejo', 'Erick', 'Lobo Solitario'],
    lastName: ['Shihemi', 'Viejo', 'Navarro', 'Saucedo'],
    expedient: ['PROF123', 'PROF456', 'PROF789', 'PROF101112'],
    type: ['Teacher', 'Teacher', 'Teacher', 'Teacher'],
    subjects: [1, 2, 3, 4],
    img: ['https://i.ibb.co/vmmYzh9/imagen-2023-11-16-041252855.png', 'https://scontent.fhmo6-1.fna.fbcdn.net/v/t1.6435-9/67293806_331358077818046_7274083588918738944_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=yl4EKjZhLjQAX8zKoKb&_nc_ht=scontent.fhmo6-1.fna&oh=00_AfB13FE_YN-61vF1x7hEapkudURxwAEUwTd-mWZpVhNxDw&oe=657D8FF7', 'https://i.ibb.co/5s0W8vH/imagen-2023-11-16-041224390.png', 'https://i.ibb.co/HznydVS/imagen-2023-11-16-041135212.png']
};


const handleLogin = (e) => {
  e.preventDefault();
  navigate("/app");
};  


const indexTeacher = teacher.expedient.findIndex(exp => exp === username);
const indexUser = user.expedient.findIndex(exp => exp === username);

const findUser =
  indexTeacher !== -1
    ? {
        name: teacher.name[indexTeacher],
        lastName: teacher.lastName[indexTeacher],
        expedient: teacher.expedient[indexTeacher],
        type: teacher.type[indexTeacher],
        subjects: teacher.subjects[indexTeacher],
        img: teacher.img[indexTeacher],
      }
    : indexUser !== -1
    ? {
        name: user.name[indexUser],
        lastName: user.lastName[indexUser],
        expedient: user.expedient[indexUser],
        gpa: user.gpa[indexUser],
        type: user.type[indexUser],
        subjects: user.subjects[indexUser],
        img: user.img[indexUser],
      }
    : null;

    let userJson = JSON.stringify(findUser);

    localStorage.setItem('user', userJson);

    

    
  


  return (
    <section className="contenedor">
      <div className="login-container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <h1 className="opacity">Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Expediente"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin} className="opacity button">
                Iniciar Sesión
              </button>
            </form>
            <div className="register-forget opacity"></div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </div>
    </section>
    
  );
}

export default LoginScreen;
