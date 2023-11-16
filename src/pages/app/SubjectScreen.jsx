import React, { useEffect } from 'react'
import Table from '../../shared/components/Table';
import { useParams } from 'react-router-dom';
import Assignment from '../../classes/assignment';
import '../../CSS/SubjectButtons.css'

// const localAssignments = JSON.parse(localStorage.getItem('Assigments')) || [];

const SubjectScreen = () => {
  const [assignments, setAssignments] = React.useState([]);
  const { id } = useParams();

  const getAssignments = async () => {
    const localAssignments = await Assignment.getAssignmentsBySubject(id)
    const subjectAssignments = localAssignments.filter(a => a.subject_id == id).map((assignment) => {
      return {
        ID: assignment.assignment_id,
        subject_id: assignment.subject_id,
        titulo: assignment.title,
        Descripcion: assignment.description,
        Fecha: new Date(assignment.date).toDateString(),
        Calificacion: assignment.grade,
        answered: assignment.answered,
        // Subir: <button>Responder</button>
      }
    })
    setAssignments(subjectAssignments)
  }

  let localUserInfo = localStorage.getItem('user');
  let storedUser = JSON.parse(localUserInfo);


  useEffect(() => {
    document.title = 'Tareas'
    getAssignments()
  }, [id])


  return (
    <>
      <Table rows={assignments} columns={columns} />
      <button className='button-add' onClick={Assignment.setDummyData}>Llenar bdd</button>
      {storedUser.type === "Teacher"?(
        
      <button className='button-edit'>Editar</button>
        ):null}
      
    </>
  )
}

export default SubjectScreen
const rows = [{ "assignment_id": 1698982385812, "subject_id": "Actividad 1", "title": 1, "description": "Sobarme los huevos", "date": "2023-11-03T03:33:05.812Z", "grade": "0/10" }]

const columns = ['ID', 'Descripcion', 'Fecha', 'Calificacion',];