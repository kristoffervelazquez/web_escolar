import React from 'react';
import './css/table.css';

function Table({ rows, columns }) {
  return (
    <div className="tareas-container">
      <table className="tareas-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Subir</th>

          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, cellIndex) => (
                <td key={cellIndex}>{row[column]}</td>
              ))}
              <td><button className='blue-btn'>Responder</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
