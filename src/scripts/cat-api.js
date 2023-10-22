import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH';

// const url = 'https://api.thecatapi.com/v1';

// const key = {
//   headers: {
//     'x-api-key':
//       'live_eFQNzE6t9Yns8DpBqOnhUKvvvHPrVTd4nqMp4HJQUHmfMUGURXupaEMIop0eMOzH',
//   },
// };

function fetchBreeds() {
  console.log(axios('/breeds'));
  return axios('/breeds').data
 
  // return axios('/breeds').data
  // {
  //   if (response.ok) {
  //     return response.json();
  //     // throw new Error(response.status);
  //   }
    
  // });
  
}

// function fetchCatByBreed(breedId) {
//   const breed = `${url}/images/search?breed_ids=${breedId}`;
//   return fetch(breed, key).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

function fetchCatByBreed(breedId) {
  axios(`/images/search?breed_ids=${breedId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
