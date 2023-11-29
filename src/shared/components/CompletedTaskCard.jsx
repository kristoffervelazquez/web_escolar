
import "./css/todotaskcard.css"
import Modal from "./Modal";
import { useState } from "react";


function CompletedTaskCard ({assignment}) {
    console.log(assignment)
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <div>
            <section className="main-container">
                
                <div className="card-id">{assignment.assignment_id}</div>
                <div className="card-containerr">
                    <div className="actName">   
                        {assignment.title}                       
                    </div>
                    <div className="act-desc">
                    {assignment.description}
                    </div>
                    {/* <button className="sendd">
                        Responder
                    </button>              */}
                    <button className="detalles">Detalles</button>     
                </div>
                <div className="card-footerr">
                    <div className="date">
                        {new Date(assignment.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'} )}
                    </div>
                    <div className="date">
                        Calificación: {assignment.grade}
                    </div>
                </div>
            </section>

        </div>
    );

}

export default CompletedTaskCard;
