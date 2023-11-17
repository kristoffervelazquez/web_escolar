import "./css/table.css";
import Assignment from "../../classes/assignment";
import { useState } from "react";
import Modal from "./Modal";

function Table({ rows, columns }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = async (row) => {
    setSelectedRow(row);
    setShowModal(true);
    const assignment = await Assignment.getAssignmentById(row.ID);
    console.log(assignment);
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
        {/* Contenido del modal */ <h1>hola pendejo pongase a chamber</h1>}
        {selectedRow && (
          <div>
            {/* Aquí puedes mostrar la información del elemento seleccionado */}
            <h1 className="modal-content">
              Ejemplo
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem
              mollitia facilis iste fuga, minima, repellat, voluptatum
              voluptatem voluptate recusandae dolorum quos eveniet culpa est
              beatae suscipit inventore quaerat aut? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Amet rem mollitia facilis iste fuga,
              minima, repellat, voluptatum voluptatem voluptate recusandae
              dolorum quos eveniet culpa est beatae suscipit inventore quaerat
              aut?
            </h1>

            {/* Otros detalles del elemento */}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Table;
