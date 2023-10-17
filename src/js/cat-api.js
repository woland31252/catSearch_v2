import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH';

const URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
    const breeds = `${URL}/breeds`
    return fetch(breeds, axios).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        } return response.json();
    });
}

function fetchCatByBreed(breedId) {
    const breed = `${URL}/images/search?breed_ids=${breedId}`;
    fetch(breed, axios).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        } return response.json();
    });
}

export { fetchBreeds, fetchCatByBreed };