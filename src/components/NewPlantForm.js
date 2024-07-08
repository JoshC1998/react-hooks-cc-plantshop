import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [add, setAdd] = useState({
    name: "",
    image: "",
    price: 0,
  });

  function onSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(add) 
    })
    .then(response => response.json())
    .then(newPlant => {
      addPlant(newPlant);
      setAdd({
        name: '',
        image: '',
        price: 0
      });
    })
    .catch(error => {
      console.error('Error adding plant:', error);
    });
  }

  function handleChange(event) {
    setAdd({ ...add, [event.target.name]: event.target.value });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={add.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={add.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={add.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;