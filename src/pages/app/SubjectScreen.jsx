import React, { useEffect } from 'react'
import Table from '../../shared/components/Table';

const localAssignments = JSON.parse(localStorage.getItem('Assigments')).map((assignment) => {
  return {
    ID: assignment.assignment_id,
    subject_id: assignment.subject_id,
    titulo: assignment.title,
    Descripcion: assignment.description,
    Fecha:  new Date(assignment.date).toDateString(),
    Calificacion: assignment.grade,
    Accion: <button>Responder</button>
  }
}) || [];

const SubjectScreen = () => {
  useEffect(() => {
    document.title = 'Tareas'
    if (!localAssignments) return;
  }, [])



  

  return (
    <>
      <Table rows={localAssignments} columns={columns} />
    </>
  )
}

export default SubjectScreen
const rows = [{"assignment_id":1698982385812,"subject_id":"Actividad 1","title":1,"description":"Sobarme los huevos","date":"2023-11-03T03:33:05.812Z","grade":"0/10"}]

const columns = ['ID', 'Descripcion', 'Fecha', 'Calificacion'];