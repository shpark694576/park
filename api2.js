const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTU4OTgzOWRjY2IxMjExYjNmYTVmYWRjMjYzYmE4NSIsInN1YiI6IjY2MzA2NWVkYWFmODk3MDEyOTM1M2VlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H5ASAQXGBgbfH5TN7G_UMp_WM2z-2Z3aecvul5y93gU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));