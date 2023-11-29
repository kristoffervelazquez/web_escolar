import React, { useEffect, useState } from 'react'
import Table from '../../shared/components/TableLegacy';
import { useParams } from 'react-router-dom';
import Assignment from '../../classes/assignment';
import '../../CSS/SubjectButtons.css'
import CompletedTaskCard from '../../shared/components/CompletedTaskCard';
import TodoTaskCard from '../../shared/components/TodoTaskCard';
import Modal from '../../shared/components/Modal';


const SubjectScreen = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [assignments, setAssignments] = React.useState([]);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const getAssignments = async () => {
    const localAssignments = await Assignment.getAssignmentsBySubject(id)
    const subjectAssignments = localAssignments.filter(a => a.subject_id == id)
    setAssignments(subjectAssignments)
  }

  const handleOpenTaskModal = () => {
    setShowModal(true)
  }

  const handleAddNewTask = (e) => {
    e.preventDefault()
    if (!title || !description || !date) {
      return alert('Todos los campos son necesarios')
    }

    // Se crea la tarea
    const assignment = new Assignment({
      subject_id: id,
      title: title,
      description,
      date: date
    })
    // Se publica la tarea
    assignment.publish()

    // Se limpia el estado
    setDate('')
    setTitle('')
    setDescription('')
    getAssignments()
    setShowModal(false)


  }

  useEffect(() => {
    getAssignments()
  }, [id])

  return (

    <>



      {
        user.type == "Teacher" ?
          <>
            <Table rows={assignments}/>
            <button className='button-add' onClick={Assignment.setDummyData}>Llenar bdd</button>
            <button className='button-add' onClick={handleOpenTaskModal}>Nueva tarea</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <form>
                <h2>Titulo de la tarea</h2>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Titulo" />
                <h2>Descripción de la tarea</h2>
                <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Descripcion" />
                <h2>Fecha de cierre</h2>
                <input value={date} onChange={e => setDate(e.target.value)} type="datetime-local" />

                <button onClick={handleAddNewTask}>Publicar tarea</button>
              </form>
            </Modal>
          </>
          :
          <>
            {
              assignments.map(assignment => {
                if (assignment.answered) {
                  return <CompletedTaskCard key={assignment.assignment_id} assignment={assignment} />
                } else {
                  return <TodoTaskCard key={assignment.assignment_id} assignment={assignment} />
                }

              })
            }
          </>
      }

    </>
  )
}

export default SubjectScreen;