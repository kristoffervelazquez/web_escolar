import { useState } from "react";
import "./css/LoginScreen.css";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/app");
  };

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
              <button onClick={handleLogin} className="opacity">
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
