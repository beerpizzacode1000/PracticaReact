// PetForm.js
import React, { useState } from 'react';
import '../PetForm.css'

const PetForm = () => {
  const [petData, setPetData] = useState({
    name: '',
    species: '',
    owner: '',
    vet: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = () => {
    // Aquí manejar el envío de datos .
    console.log('Datos de la mascota:', petData);
  };

  const handleCancel = () => {
    // Limpiar los datos del formulario
    setPetData({
      name: '',
      species: '',
      owner: '',
      vet: '',
    });
  };

  return (
    <div className="form-container">
      <h1>THE APP FOR YOUR PETS</h1>
      <h2>MEDICAL ASSISTANCE</h2>
      <form>
        <div>
          <label>Nombre de la Mascota:</label>
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Especie:</label>
          <input
            type="text"
            name="species"
            value={petData.species}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dueño:</label>
          <input
            type="text"
            name="owner"
            value={petData.owner}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Veterinario:</label>
          <input
            type="text"
            name="vet"
            value={petData.vet}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Ingresar Datos
        </button>
        <button type="button" onClick={handleCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default PetForm;
