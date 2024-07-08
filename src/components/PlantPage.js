import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlant] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then((plant) => setPlant(plant))
      .catch(error => {
        console.error('Error fetching plants:', error);
      });
  }, []);

  function addPlant(newPlant) {
    setPlant([...plants, newPlant]);
  }

  const listedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} search={search} />
      <PlantList name={listedPlants} />
    </main>
  );
}

export default PlantPage;