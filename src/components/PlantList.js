import React from "react";
import PlantCard from "./PlantCard";

function PlantList({name}) {
  return (
    <ul 
    className="cards">{name.map((plant)=>{
        return <PlantCard key={plant.id} plant={plant}/>
       }
      )}
      </ul>
  );
}

export default PlantList;
