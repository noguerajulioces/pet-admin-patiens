import React from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <h1 className="text-center">Administrador de Pacientes</h1>

      <div className="container">
          <div className="row">
            <div className="col-6">
              <Formulario />
            </div>  

            <div className="col-6">
              2
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
