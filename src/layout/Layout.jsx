import "../CSS/styles.css"

const Layout = () => {
  return (
    <div className="layout">
            
      <main className="container">
	<aside className="servers">
		<div className="servers-collection">
			<div className="server focusable server-friends unread" role="button" aria-label="Friends unread">
				<div className="server-icon">
                    {/* <img  width="50" height="50" src="https://img.icons8.com/ios-glyphs/90/graduation-cap--v1.png" alt="graduation-cap"/> */}
                </div>
			</div>                        
		</div>
		
		<div className="servers-collection">
			<div className="server focusable unread" role="button" aria-label="Discord Developers unread">
				<div className="server-icon">
                    
                </div>
			</div>
		</div>
		
		<div className="servers-collection">
			<div className="server focusable active" role="button" aria-label="My Server" aria-selected="true">
				<div className="server-icon">
                   </div>
			</div>
		</div>
	</aside>
	
	<aside className="channels">
		<header className="channels-header focusable">
        {/* <h3 role="header" className="channels-header-name"> Información de la materia </h3>*/}		   	
		</header>
				
		<section className="channels-list">
			<header className="channels-list-header focusable">
				{/*<h5>Text Channels</h5>*/}
			</header>			
				
			<header className="channels-list-header focusable">
                {/*<h5>Voice Channels</h5>*/}				
			</header>
		</section>	
	
	</aside>
		
	<div className="vert-container">
    <aside className="news">
		<header className="channels-header focusable">
         <h3 role="header" className="channels-header-name"> Noticias </h3>
		</header>
				
	
			<header className="channels-list-header focusable">
				{/*<h5>Text Channels</h5>*/}
			</header>
			
			<ul className="channels-list-text">
				
			</ul>
			
			<header className="channels-list-header focusable">
                {/*<h5>Becas</h5>*/}				
			</header>
		
			
	</aside>

        
        <menu type="toolbar" className="menu">
            <h2 className="menu-name">general</h2>			
		</menu>		
		<section className="chat">		
		</section>        
       
		
	</div>
</main>
        
    </div>
  );
}

export default Layout;
