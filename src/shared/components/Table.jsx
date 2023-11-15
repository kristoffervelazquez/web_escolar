import React from 'react';
import './css/table.css';
import Assignment from '../../classes/assignment';

function Table({ rows, columns }) {
  const handleClick = async (row) => {
    const assignment = await Assignment.getAssignmentById(row.ID);
    console.log(assignment);
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
                if (column === 'ID') return (
                  <td key={cellIndex}>{row[column].substring(0, 7)}</td>
                )
                return (
                  <td key={cellIndex}>{row[column]}</td>
                )
              })}
              <td><button onClick={() => handleClick(row)} className='blue-btn'>Responder</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
