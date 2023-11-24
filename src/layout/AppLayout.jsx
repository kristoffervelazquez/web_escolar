import "../CSS/styles.css";
import ChannelsList from "./components/ChannelsList";
import MiddleContainer from "./components/MiddleContainer";
import UserAside from "./components/UserAside";
import ServersAside from "./components/ServersAside";
import Footer from "./components/Footer";
import Cards from "../shared/components/Cards";

const AppLayout = ({ children }) => {
  // Variable para verificar si está en la sección de inicio (home)
  const isHomeSection = window.location.pathname === 'app/home'; // Puedes ajustar la ruta según tu configuración

  return (
    <div className="layout">
      <main className="container">
        <ServersAside />
        <ChannelsList />
        <MiddleContainer>
          {/* Renderizar la tarjeta solo si está en la sección de inicio */}
          {isHomeSection && <Cards />}
          {children}
        </MiddleContainer>
        <UserAside />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

