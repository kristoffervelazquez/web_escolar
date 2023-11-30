import { useState } from "react";
import "./css/completedtaskcard.css";
import Modal from "./Modal";

function TodoTaskCard({ assignment }) {
  const [showModal, setShowModal] = useState(false);
  const [fileDragged, setFileDragged] = useState(false);
  const [file, setFile] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setFileDragged(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setFileDragged(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    setFile(selectedFile);
    setFileDragged(false);
  };
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
            <p>
              {new Date(assignment.date).toLocaleDateString("es-MX", {
                month: "long",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </section>
        </section>
        <section className="card-footer">
          <div className="buttons">
            <button
              className="send"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Responder
            </button>
            <button className="details">Detalles</button>
          </div>
          <div className="calif">Calificación: XX </div>
        </section>
      </section>
      <Modal show={showModal} onClose={closeModal} className="modal">
        <div className="modal-content">
          <h1>{assignment.title}</h1>
          <h2>{assignment.description}</h2>
          <h2>Adjuntar Archivo</h2>
          <div
            className={fileDragged ? "file-drop-area active" : "file-drop-area"}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
            <p>Arrastra y suelta archivos aquí o haz clic para seleccionar</p>
          </div>
          {file && <p>Archivo seleccionado: {file.name}</p>}
          <h2>Comentarios para el profesor</h2>
          <textarea cols="80" rows="10"></textarea>
          <br />
          <button onClick={closeModal}>Cancelar</button>
          <button onClick={closeModal}>Subir</button>
        </div>
      </Modal>
    </div>
  );
}

export default TodoTaskCard;