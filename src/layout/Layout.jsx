import "../CSS/styles.css"

const Layout = () => {
  return (
    <div className="layout">
  
      <main className="container">


		<aside className="servers">
			
			<div className="home">
				<button>
					home
				</button>
			</div>
			
			<div className="subjects">

				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>				

			</div>			
	
		</aside>

	<aside className="channels">
		<header className="channels-header focusable">
         <h3 role="header" className="channels-header-name"> ITEM LIST </h3>
		</header>
				
		<section className="channels-list">
			<header className="channels-list-header focusable">
				<h5>Item 1</h5>
			</header>			
				
			<header className="channels-list-header focusable">
                <h5>Item 2</h5>
			</header>

			<header className="channels-list-header focusable">
                <h5>Item 3</h5>
			</header>

			<header className="channels-list-header focusable">
                <h5>Item 4</h5>
			</header>
		</section>	
	
	</aside>
		
	<div className="vert-container">
   
        <menu type="toolbar" className="menu">
        <h2 className="menu-name">  </h2>			
		</menu>		
	
	
        <aside className="news">
		<header className="channels-header focusable">
         <h3 role="header" className="channels-header-name"> Noticias </h3>
		</header>					
		<header className="channels-list-header focusable">
				
			</header>														
	</aside>

		
	</div>
</main>
        
    </div>
  );
}

export default Layout;
