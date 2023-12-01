// ShowMaterial.js
import React, { useState } from 'react';
import './css/material.css';
import Assignment from "../../classes/assignment";
import { useParams } from 'react-router-dom';

function ShowMaterial() {

  const { id } = useParams();
  const [tasks] = useState([
    {
      id: 1,
      title: 'Links',
      subject_id: 1,
    }
  ]);

  const [activeTask, setActiveTask] = useState(null);
  const [materials, setMaterials] = useState([]);

  const handleTaskClick = async (taskId) => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    setActiveTask(selectedTask);
    const materialsBySubject = await Assignment.getMaterialsById(id);
    setMaterials(materialsBySubject);
    console.log(materials);
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
                <li key={material.id}>
                <div class="card">
                  <img src="data:image/png;base64,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"/>
                  <div class="container">
                    <h4><a href={material.url}  target="_blank" className='link'>{material.type}</a></h4> 
                  </div>
                </div>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowMaterial;
