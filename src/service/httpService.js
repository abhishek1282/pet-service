

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});
// get api method

async function getAllPets() {
    const url='https://fakestoreapi.com/products'
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// GET request

async function getPetById(id) {
  try {
    const response = await api.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST request

async function createPet(petData) {
  try {
    const response = await api.post('/pets', petData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// PUT request

async function updatePet(id, updatedPetData) {
  try {
    const response = await api.put(`/pets/${id}`, updatedPetData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// DELETE request

async function deletePet(id) {
  try {
    await api.delete(`/pets/${id}`);
    console.log(`Pet with id ${id} deleted.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
// create export for all methods

export { getAllPets, getPetById, createPet, updatePet, deletePet };


