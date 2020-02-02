import React from 'react';

const Cita = ({cita, eliminarCita}) => (
    <div>
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.dueño}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>

        <button
            className="btn btn-success"
            onClick={ () => eliminarCita(cita.id)}
        >
            Eliminar
        </button>
    </div>
);

export default Cita;