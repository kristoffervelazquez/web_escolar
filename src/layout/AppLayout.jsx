import "../CSS/styles.css";
import ChannelsList from "./components/ChannelsList";
import MiddleContainer from "./components/MiddleContainer";
import UserAside from "./components/UserAside";
import ServersAside from "./components/ServersAside";
import Footer from "./components/Footer";

const AppLayout = ({ children }) => {
	return (
		<div className="layout">
			<main className="container">
				<ServersAside />
				<ChannelsList />
				<MiddleContainer>{children}</MiddleContainer>
				<UserAside />
			</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
