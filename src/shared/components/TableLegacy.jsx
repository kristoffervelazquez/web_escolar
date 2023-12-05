import "./css/table.css";
import "./css/tableLegacy.css";
import Assignment from "../../classes/assignment";
import { useState } from "react";
import Modal from "./Modal";
import student from "../../assets/db/student.json";
const columns = ["assignment_id", "title", "description", "date"];
const students = student.students;

function Table({ rows }) {
  const [showModal, setShowModal] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [grade, setGrade] = useState(0);

  const handleClick = async (row) => {
    const task = await Assignment.getAssignmentById(row.assignment_id);
    setAssignment(task);
    setShowModal(true);
    console.log(task);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const reviewTask = () => {
    Assignment.reviewAssignment(assignment.assignment_id, grade);
  };

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
             
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onClose={closeModal}>
        {assignment && (
          <div>
            {students.map((student) => {
              return (
                <div key={student.expedient} className="containermodal">
                  <p>{student.expedient}</p>
                  <input
                    value={grade}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      if (!isNaN(value) && value >= 1 && value <= 10) {
                        setGrade(value);
                      }
                    }}
                    type="number"
                    placeholder="Calificación"
                    min="1"
                    max="10"
                  />
                  <br />

                  <button onClick={reviewTask}>Calificar</button>
                  <a href={assignment.file} target="_blank">
                    <button className="containermodal">Ver archivo</button>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </Modal>
      ;
    </div>
  );
}

export default Table;
