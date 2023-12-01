// ShowMaterial.js
import React, { useState } from 'react';
import './css/material.css';
import Assignment from "../../classes/assignment";

function ShowMaterial() {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Libros',
      subject_id: 1, 
    },
    {
      id: 2,
      title: 'Articulos web',
      subject_id: 2,
    },
  ]);

  const [activeTask, setActiveTask] = useState(null);
  const [materials, setMaterials] = useState([]);

  const handleTaskClick = async (taskId) => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    setActiveTask(selectedTask);

    const materialsBySubject = await Assignment.getAssignmentsBySubject(selectedTask.subject_id);
    setMaterials(materialsBySubject);
  };

  return (
    <div>
      <h1>Material Didáctico</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task ${activeTask && activeTask.id === task.id ? 'active' : ''}`} onClick={() => handleTaskClick(task.id)}>
            {task.title}
          </li>
        ))}
      </ul>
      {activeTask && (
        <div>
          <h3>Materiales:</h3>
          <ul>
            {materials.map((material) => (
              <li key={material.assignment_id}>
                <p>{material.title}</p>
                <p>{material.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowMaterial;
