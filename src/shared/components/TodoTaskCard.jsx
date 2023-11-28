import { useState } from "react";
import "./css/completedtaskcard.css";
import Modal from "./Modal";

function TodoTaskCard({ assignment }) {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <div>
            <section className="card-container">
                <section className="act-date">
                    <section className="act-info">
                        <div className="card-header"> {assignment.assignment_id}</div>
                        <div className="act-name"> {assignment.title}</div>
                        <p>{assignment.description}</p>
                    </section>
                    <section className="date-container">
                        <div className="expired-date">Fecha de entrega</div>
                        <h1>{new Date(assignment.date).getDate()}</h1>
                        <p>{new Date(assignment.date).toLocaleDateString('es-MX', { month: 'long', hour: 'numeric', minute: 'numeric' })}</p>
                    </section>
                </section>
                <section className="card-footer">
                    <div className="buttons">
                        <button className="send" onClick={() => { setShowModal(true) }}>Responder</button>
                        <button className="details">Detalles</button>
                    </div>
                    <div className="calif">Calificación: XX </div>
                </section>
            </section>
            <Modal show={showModal} onClose={closeModal}>
                <div>
                    {/* Aquí puedes mostrar la información del elemento seleccionado */}
                    <h1>{assignment.title}</h1>
                    <h2>{assignment.description}</h2>
                    <h2>Adjuntar Archivo</h2>
                    <input type="file" />
                    <br />
                    <h2>Comentarios para el profesor</h2>
                    <textarea cols="80" rows="10"></textarea>
                    <br />
                    <button onClick={closeModal}>Cancelar</button>
                    <button onClick={closeModal}>Subir</button>
                    {/* Otros detalles del elemento */}
                </div>
            </Modal>
        </div>
    );
}

export default TodoTaskCard;