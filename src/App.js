// App.js
import React, { useState } from 'react';
import Home from './Componentes/Home';
import PetForm from './Componentes/PetForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <button onClick={() => navigateTo('home')}>Inicio</button>
        <button onClick={() => navigateTo('ingresar-mascota')}>Ingresar Mascota</button>
      </header>
      {currentPage === 'home' && <Home />}
      {currentPage === 'ingresar-mascota' && <PetForm />}
    </div>
  );
}

export default App;
