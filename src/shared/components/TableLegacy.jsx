import "./css/table.css";
import Assignment from "../../classes/assignment";
import { useState } from "react";
import Modal from "./Modal";
import "./CSS/modal.css";
import "./css/tableLegacy.css"

const user = JSON.parse(localStorage.getItem("user"));

function Table({ rows, columns }) {
  const [showModal, setShowModal] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [fileDragged, setFileDragged] = useState(false);
  const [file, setFile] = useState(null);

  const handleClick = async (row) => {
    const task = await Assignment.getAssignmentById(row.ID);
    setAssignment(task);
    setShowModal(true);

  };

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

  let localUserInfo = localStorage.getItem("user");
  let storedUser = JSON.parse(localUserInfo);

  return (
    <div className="tareas-container">
      <table className="tareas-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, cellIndex) => {
                if (column === "ID")
                  return <td key={cellIndex}>{row[column].substring(0, 7)}</td>;
                return <td key={cellIndex}>{row[column]}</td>;
              })}
              <td>
                <button onClick={() => handleClick(row)} className="blue-btn">
                  Responder
                </button>
              </td>
              {storedUser.type === "Teacher" ? (
                <td>
                  <button
                    onClick={() => handleClick(row)}
                    className="blue-btn"
                  >
                    Editar
                  </button>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>


     
     <Modal show={showModal} onClose={closeModal} className="modal">
      {assignment && user.type === 'Student' ? (
        <div className="modal-content">
          <h1>{assignment.title}</h1>
          <h2>{assignment.description}</h2>
          <h2>Adjuntar Archivo</h2>
          <div
            className={fileDragged ? 'file-drop-area active' : 'file-drop-area'}
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
          <textarea  className="text-areaaa" cols="93" rows="10"></textarea>
          <br />
          <button onClick={closeModal} className="tableLegacy">Cancelar</button>
          <button onClick={closeModal} className="tableLegacy">Subir</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Calificacion" />
        </div>
      )}
    </Modal>
    </div>
  );
}

export default Table;
