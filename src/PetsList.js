import React, { useEffect, useState } from 'react';
import {getAllPets} from './service/httpService'
function PetsList(props) {
    // create useeffect to fetch petlist from httpService
    const [petList,setPetList]=useState([])
useEffect(()=>{
    getAllPets().then(data=>setPetList(data))
}
    
    

    ,[])
    // map the petlist to a list of pet cards
    const petCards = petList.map(pet => (
        <div key={pet.id}>
            <h2>{pet.category}</h2>
            <p>{pet.species}</p>
            <p>{pet.breed}</p>
        </div>
    ))
    // return the list of pet cards
    return (
        <div>
            {petCards}
        </div>
    );
    
  
    // return the pets list component
    //render the 
    return (
        <div>
           
        </div>
    );

  
}

export default PetsList;