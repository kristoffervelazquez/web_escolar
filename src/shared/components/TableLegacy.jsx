import "./css/table.css";
import Assignment from "../../classes/assignment";
import { useState } from "react";
import Modal from "./Modal";

const user = JSON.parse(localStorage.getItem("user"));

function Table({ rows, columns }) {
  const [showModal, setShowModal] = useState(false);
  const [assignment, setAssignment] = useState(null);

  const handleClick = async (row) => {
    const task = await Assignment.getAssignmentById(row.ID);
    setAssignment(task);
    setShowModal(true);

  };

  const closeModal = () => {
    setShowModal(false);
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


      <Modal show={showModal} onClose={closeModal}>
        
       
        { assignment && 
        
            user.type == "Student"?
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
          : <div>
            <input type="text" placeholder="Calificacion" />

          </div>

        }
        
        
      </Modal>
    </div>
  );
}

export default Table;
