const inputSearch = document.querySelector('#inputSearch')
const buttonSearch = document.querySelector('#buttonSearch')
const row = document.querySelector('.row')

// buttonSearch 

buttonSearch.addEventListener('click', () => {
  const textSearch = inputSearch.value;
  if (textSearch !== '') {
    searchOMDB(textSearch);
  };
});

const searchOMDB = async (term) => {
  try {
    row.innerHTML = '';
    const response = await fetch(`http://www.omdbapi.com/?apikey=&s=${term}`);
    const data = await response.json();
    if (data.Search) {
      data.Search.forEach(movie => {
        generateCard(movie);
      });
    };
  } catch(error) {
    console.log(error);
  }
}

function generateCard(movie) {
  row.innerHTML += 
  `
  <div class="col-md-4">
    <div class="card mt-5 p-3">
      <img src="${movie.Poster}" class="card-img-top" alt="poster ${movie.Title}">
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-text">${movie.Year}</p>
        <a href="#" class="btn btn-primary">Like</a>
      </div>
    </div>
  </div>
  `
}

