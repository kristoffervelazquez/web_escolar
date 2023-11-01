import React from 'react'
import Table from '../../shared/components/Table';

const SubjectScreen = () => {
  return (
    <>
      <Table rows={rows} columns={columns} />
    </>
  )
}

export default SubjectScreen


const rows = [
  ['Tarea 1', 'Descripción de la tarea 1', 'Fecha 1', <button>Responder</button>],
  ['Tarea 2', 'Descripción de la tarea 2', 'Fecha 2', <button>Responder</button>],
  ['Tarea 3', 'Descripción de la tarea 3', 'Fecha 3', <button>Responder</button>],
  ['Tarea 4', 'Descripción de la tarea 4', 'Fecha 4', <button>Responder</button>],
  ['Tarea 5', 'Descripción de la tarea 5', 'Fecha 5', <button>Responder</button>],
  ['Tarea 6', 'Descripción de la tarea 6', 'Fecha 6', <button>Responder</button>],
  // Puedes agregar más filas según sea necesario
];

const columns = ['Título', 'Descripción', 'Fecha', 'Accion'];