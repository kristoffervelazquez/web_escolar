import "./css/completedtaskcard.css";

function CompletedTaskCard() { 

    return (
        <div> 
            <section className="card-container">                
                <section className="act-date">
                    <section className="act-info">
                        <div className="card-header"> Actividad 1</div>
                        <div className="act-name"> Nombre de la actividad</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </section>
                    <section className="date-container">
                        <div className="expired-date">Fecha de entrega</div>
                        <h1>28</h1>
                        <p>diciembre</p>
                    </section>
                </section>                
                <section className="card-footer">
                    <div className="buttons">
                        <button className="send">Responder</button>    
                        <button className="details">Detalles</button>    
                    </div>                    
                    <div className="calif">Calificación: XX </div>
                </section>
            </section>           

        </div>
    );}

export default CompletedTaskCard;