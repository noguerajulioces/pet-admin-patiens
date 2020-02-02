import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Arreglo de citas
  const [citas, guardarCitas ] = useState([]);
  
  // función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  // FUnción eliminar by ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }


  return (
    <>
      <h1 className="text-center">Administrador de Pacientes</h1>

      <div className="container">
          <div className="row">
            <div className="col-6">
              <Formulario 
                crearCita={crearCita}
              />
            </div>  

            <div className="col-6">
              <h2>Citas</h2>
              {citas.map(cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
