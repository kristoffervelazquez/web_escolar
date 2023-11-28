import "./css/table.css";
import Assignment from "../../classes/assignment";
import { useState } from "react";
import Modal from "./Modal";

const user = JSON.parse(localStorage.getItem("user"));
const columns = ['assignment_id', 'title', 'description', 'date'];

function Table({ rows }) {
  const [showModal, setShowModal] = useState(false);
  const [assignment, setAssignment] = useState(null);

  const handleClick = async (row) => {
    const task = await Assignment.getAssignmentById(row.assignment_id);
    setAssignment(task);
    setShowModal(true);
    console.log(task)

  };

  const closeModal = () => {
    setShowModal(false);
  };

  const reviewTask = () => {
    const grade = document.querySelector("input").value;
    Assignment.updateAssignment(assignment.assignment_id, assignment.title, assignment.description, grade)
  }


  


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
                  Calificar
                </button>
              </td>
              {/* {storedUser.type === "Teacher" ? (
                <td>
                  <button
                    onClick={() => handleClick(row)}
                    className="blue-btn"
                  >
                    Editar
                  </button>
                </td>
              ) : null} */}
            </tr>
          ))}
        </tbody>
      </table>


      <Modal show={showModal} onClose={closeModal}>


        {assignment &&

          user.type == "Student" ?
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
            <br />
            <button onClick={reviewTask}>
              calificar
            </button>
          </div>

        }


      </Modal>
    </div>
  );
}

export default Table;
