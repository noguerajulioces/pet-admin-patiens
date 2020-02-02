import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en local storage
  let citasInicials = JSON.parse(localStorage.getItem('citas'));
  if(!citasInicials){
    citasInicials = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas ] = useState(citasInicials);
  
  // Use effect para realizar ciertas operaciones cuando el state cambia

  useEffect( () => {
    if(citasInicials){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasInicials] );

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

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : 'Administra citas'

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
              <h2>{titulo}</h2>
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
