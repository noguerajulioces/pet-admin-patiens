import React, { useState } from 'react';


const Formulario = () => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Función que se ejecuta al escribir en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    //extraer los valores
    const { mascota, dueño, fecha, hora, sintomas} = cita;

    return (
        <>
            <h2> Crear Cita</h2>

            <form>
                <div className="form-group">
                    <label>Nombre Mascota</label>
                    <input
                        type="text"
                        name="mascota"
                        className="form-control"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />
                </div>

                <div className="form-group">
                    <label>Nombre dueño</label>
                    <input
                        type="text"
                        name="dueño"
                        className="form-control"
                        placeholder="Nombre dueño de mascota"
                        onChange={actualizarState}
                        value={dueño}
                    />
                </div>

                <div className="form-group">
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        className="form-control"
                        onChange={actualizarState}
                        value={fecha}
                    />
                </div>

                <div className="form-group">
                    <label>Hora</label>
                    <input
                        type="time"
                        name="hora"
                        className="form-control"
                        onChange={actualizarState}
                        value={hora}
                    />
                </div>

                <div className="form-group">
                    <label>Síntomas</label>
                    <textarea
                        className="form-control"
                        name="sintomas"    
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </>
    );
}

export default Formulario;