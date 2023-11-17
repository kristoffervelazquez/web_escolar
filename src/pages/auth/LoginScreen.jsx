import { useState } from "react";
import "./css/LoginScreen.css";
import { useNavigate } from "react-router-dom";
import student from "../../assets/db/student.json";
import teacher from "../../assets/db/teacher.json";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userStudent = student.students;
  const userTeacher = teacher.teachers;

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/app");
  };

  const indexTeacher = userTeacher.findIndex((teacher) => teacher.expedient === username);
  const indexUser = userStudent.findIndex((student) => student.expedient === username);

  const findUser =
    indexTeacher !== -1
      ? {
          name: userTeacher[indexTeacher].name,
          lastName: userTeacher[indexTeacher].lastName,
          expedient: userTeacher[indexTeacher].expedient,
          type: userTeacher[indexTeacher].type,
          subjects: userTeacher[indexTeacher].subjects,
          img: userTeacher[indexTeacher].img,
        }
      : indexUser !== -1
      ? {
          name: userStudent[indexUser].name,
          lastName: userStudent[indexUser].lastName,
          expedient: userStudent[indexUser].expedient,
          gpa: userStudent[indexUser].gpa,
          type: userStudent[indexUser].type,
          subjects: userStudent[indexUser].subjects,
          img: userStudent[indexUser].img,
        }
      : null;

  let userJson = JSON.stringify(findUser);
  localStorage.setItem("user", userJson);

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
