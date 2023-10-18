import "../CSS/styles.css"
import ChannelsList from "./components/ChannelsList";
import MiddleContainer from "./components/MiddleContainer";
import NewsAside from "./components/NewsAside";
import ServersAside from "./components/ServersAside";

const AppLayout = ({children}) => {
	return (
		<div className="layout">
			<main className="container">
				<ServersAside />
				<ChannelsList />
				<MiddleContainer>
					{children}
				</MiddleContainer>
				<NewsAside />
			</main>

		</div>
	);
}

export default AppLayout;
