
import "./css/todotaskcard.css"

function TodoTaskCard () {

    return (
        <div>

            <section className="main-container">
                
                <div className="card-id">Activity ID</div>
                <div className="card-containerr">
                    <div className="actName">   
                        Activity Name                        
                    </div>
                    <div className="act-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <button className="sendd">
                        Responder
                    </button>             
                    <button className="detalles">Detalles</button>     
                </div>
                <div className="card-footerr">
                    <div className="date">
                        Fecha de entrega: 28 de diciembre
                    </div>
                    <div className="date">
                        Calificación: XX
                    </div>
                </div>

            </section>

        </div>
    );

}

export default TodoTaskCard;
